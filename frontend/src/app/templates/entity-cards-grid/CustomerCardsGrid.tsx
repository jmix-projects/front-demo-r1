import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Row, Col, Card } from "antd";
import { Customer } from "../../../jmix/entities/Customer";
import { getFields, ScreensContext } from "@haulmont/jmix-react-core";
import {
  defaultGridPaginationConfig,
  EntityProperty,
  Paging,
  RetryDialog,
  Spinner,
  useEntityList,
  registerRoute
} from "@haulmont/jmix-react-ui";
import { getStringId } from "@haulmont/jmix-rest";
import { gql } from "@apollo/client";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerCardsGrid";

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

const DELETE_CUSTOMER = gql`
  mutation Delete_Customer($id: String!) {
    delete_Customer(id: $id)
  }
`;

export const CustomerCardsGrid = observer(() => {
  const {
    executeListQuery,
    listQueryResult: { loading, error, data },
    handlePaginationChange,
    entityListState
  } = useEntityList<Customer>({
    listQuery: CUSTOMER_LIST,
    deleteMutation: DELETE_CUSTOMER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    paginationConfig: defaultGridPaginationConfig
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
      <Row gutter={[12, 12]}>
        {dataSource.map(e => (
          <Col key={e.id ? getStringId(e.id) : undefined} xl={8} sm={24}>
            <Card title={e._instanceName} style={{ height: "100%" }}>
              {getFields(e).map(p => (
                <EntityProperty
                  entityName={Customer.NAME}
                  propertyName={p}
                  value={e[p]}
                  key={p}
                />
              ))}
            </Card>
          </Col>
        ))}
      </Row>

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

registerRoute(
  ROUTING_PATH,
  ROUTING_PATH,
  "CustomerCardsGrid",
  <CustomerCardsGrid />,
  "CustomerCardsGrid",
  "CustomerCardsGrid"
);
