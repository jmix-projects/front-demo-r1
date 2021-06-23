import React from "react";
import { observer } from "mobx-react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  LeftOutlined
} from "@ant-design/icons";
import { Button, Card, Tooltip } from "antd";
import {
  EntityInstance,
  getFields,
  EntityPermAccessControl,
  toIdString
} from "@haulmont/jmix-react-core";
import {
  EntityProperty,
  Paging,
  Spinner,
  RetryDialog,
  useEntityList,
  EntityListProps,
  registerEntityList, registerScreen
} from "@haulmont/jmix-react-ui";
import { Customer } from "../../../jmix/entities/Customer";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";

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

const CustomerCards = observer((props: EntityListProps<Customer>) => {
  const { entityList, onEntityListChange } = props;

  const {
    items,
    count,
    executeListQuery,
    listQueryResult: { loading, error },
    handleDeleteBtnClick,
    handleCreateBtnClick,
    handleEditBtnClick,
    handlePaginationChange,
    goToParentScreen,
    entityListState
  } = useEntityList<Customer>({
    listQuery: CUSTOMER_LIST,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    entityList,
    onEntityListChange
  });

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  if (loading || items == null) {
    return <Spinner />;
  }

  return (
    <div className="narrow-layout">
      <div style={{ marginBottom: "12px" }}>
        {entityList != null && (
          <Tooltip title={<FormattedMessage id="common.back" />}>
            <Button
              htmlType="button"
              style={{ margin: "0 12px 12px 0" }}
              icon={<LeftOutlined />}
              onClick={goToParentScreen}
              key="back"
              type="default"
              shape="circle"
            />
          </Tooltip>
        )}

        <EntityPermAccessControl entityName={ENTITY_NAME} operation="create">
          <span>
            <Button
              htmlType="button"
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleCreateBtnClick}
            >
              <span>
                <FormattedMessage id="common.create" />
              </span>
            </Button>
          </span>
        </EntityPermAccessControl>
      </div>

      {items == null || items.length === 0 ? (
        <p>
          <FormattedMessage id="management.browser.noItems" />
        </p>
      ) : null}
      {items.map((e: EntityInstance<Customer>) => (
        <Card
          title={e._instanceName}
          key={e.id ? toIdString(e.id) : undefined}
          style={{ marginBottom: "12px" }}
          actions={[
            <EntityPermAccessControl
              entityName={ENTITY_NAME}
              operation="delete"
            >
              <DeleteOutlined
                key="delete"
                onClick={(event?: React.MouseEvent) =>
                  handleDeleteBtnClick(event, e.id)
                }
              />
            </EntityPermAccessControl>,
            <EntityPermAccessControl
              entityName={ENTITY_NAME}
              operation="update"
            >
              <EditOutlined
                key="edit"
                onClick={(event?: React.MouseEvent) =>
                  handleEditBtnClick(event, e.id)
                }
              />
            </EntityPermAccessControl>
          ]}
        >
          {getFields(e).map(p => (
            <EntityProperty
              entityName={ENTITY_NAME}
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
          total={count}
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
});

export default CustomerCards;
