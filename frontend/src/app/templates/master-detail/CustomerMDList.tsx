import React from "react";
import { observer } from "mobx-react";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { EntityPermAccessControl } from "@haulmont/jmix-react-core";
import {
  DataTable,
  RetryDialog,
  useMasterDetailList,
  EntityListProps
} from "@haulmont/jmix-react-ui";
import { Customer } from "../../../jmix/entities/Customer";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerMDList";

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

const CustomerMDList = observer((props: EntityListProps<Customer>) => {
  const { entityList, onEntityListChange } = props;

  const {
    items,
    count,
    relationOptions,
    executeListQuery,
    listQueryResult: { loading, error },
    handleSelectionChange,
    handleFilterChange,
    handleSortOrderChange,
    handlePaginationChange,
    handleDeleteBtnClick,
    handleCreateBtnClick,
    goToParentScreen,
    entityListState
  } = useMasterDetailList<Customer>({
    listQuery: CUSTOMER_LIST,
    deleteMutation: DELETE_CUSTOMER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    entityList,
    onEntityListChange
  });

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  const buttons = [
    <EntityPermAccessControl
      entityName={ENTITY_NAME}
      operation="create"
      key="create"
    >
      <Button
        htmlType="button"
        style={{ margin: "0 12px 12px 0" }}
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleCreateBtnClick}
      >
        <span>
          <FormattedMessage id="common.create" />
        </span>
      </Button>
    </EntityPermAccessControl>,
    <EntityPermAccessControl
      entityName={ENTITY_NAME}
      operation="delete"
      key="delete"
    >
      <Button
        htmlType="button"
        style={{ margin: "0 12px 12px 0" }}
        disabled={entityListState.selectedEntityId == null}
        onClick={handleDeleteBtnClick}
        key="remove"
        type="default"
      >
        <FormattedMessage id="common.remove" />
      </Button>
    </EntityPermAccessControl>
  ];

  if (entityList != null) {
    buttons.unshift(
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
    );
  }

  return (
    <DataTable
      items={items}
      count={count}
      relationOptions={relationOptions}
      current={entityListState.pagination?.current}
      pageSize={entityListState.pagination?.pageSize}
      entityName={ENTITY_NAME}
      loading={loading}
      error={error}
      enableFiltersOnColumns={entityList != null ? [] : undefined}
      enableSortingOnColumns={entityList != null ? [] : undefined}
      columnDefinitions={["email", "name"]}
      onRowSelectionChange={handleSelectionChange}
      onFilterChange={handleFilterChange}
      onSortOrderChange={handleSortOrderChange}
      onPaginationChange={handlePaginationChange}
      hideSelectionColumn={true}
      buttons={buttons}
    />
  );
});

export default CustomerMDList;
