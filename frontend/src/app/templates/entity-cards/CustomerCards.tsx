import React from "react";
import {observer} from "mobx-react";
import {Card} from "antd";
import {Customer} from "../../../jmix/entities/Customer";
import {getFields} from "@haulmont/jmix-react-core";
import {
  EntityProperty,
  Paging,
  registerEntityList,
  registerScreen,
  RetryDialog,
  Spinner,
  useEntityList
} from "@haulmont/jmix-react-ui";
import {getStringId} from "@haulmont/jmix-rest";
import {gql} from "@apollo/client";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerCards";

const CUSTOMER_LIST = gql`
  query CustomerList(
    $limit: Int
    $offset: Int
    $orderBy: inp_CustomerOrderBy
    $filter: [inp_CustomerFilterCondition]
  ) {
    CustomerCount
    CustomerList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      id
      _instanceName
      email
      name
    }
  }
`;

export const CustomerCards = observer(() => {
  const {
    executeListQuery,
    listQueryResult: { loading, error, data },
    handlePaginationChange,
    entityListState
  } = useEntityList<Customer>({
    listQuery: CUSTOMER_LIST,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH
  });

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  if (loading || data == null) {
    return <Spinner />;
  }

  const dataSource = data?.CustomerList ?? [];
  const pagesTotal = data?.CustomerCount ?? 0;

  return (
    <div className="narrow-layout">
      {dataSource.map(e => (
        <Card
          title={e._instanceName}
          key={e.id ? getStringId(e.id) : undefined}
          style={{ marginBottom: "12px" }}
        >
          {getFields(e).map(p => (
            <EntityProperty
              entityName={Customer.NAME}
              propertyName={p}
              value={e[p]}
              key={p}
            />
          ))}
        </Card>
      ))}

      <div style={{ margin: "12px 0 12px 0", float: "right" }}>
        <Paging
          paginationConfig={entityListState.pagination ?? {}}
          onPagingChange={handlePaginationChange}
          total={pagesTotal}
        />
      </div>
    </div>
  );
});

registerScreen({
  screenId: "CustomerCards",
  component: CustomerCards,
  caption: "Entity Cards",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
})