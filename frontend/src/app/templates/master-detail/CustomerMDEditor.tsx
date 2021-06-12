import React from "react";
import { Form, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { observer } from "mobx-react";
import { FormattedMessage } from "react-intl";
import {
  createAntdFormValidationMessages,
  createUseAntdForm,
  createUseAntdFormValidation,
  RetryDialog,
  Field,
  GlobalErrorsAlert,
  Spinner,
  useMasterDetailEditor,
  EntityEditorProps,
  useCreateAntdResetForm
} from "@haulmont/jmix-react-ui";
import { gql } from "@apollo/client";
import "../../App.css";
import { Customer } from "../../../jmix/entities/Customer";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerMDEditor";

const LOAD_CUSTOMER = gql`
  query CustomerById($id: String = "", $loadItem: Boolean!) {
    CustomerById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      email
      name
    }
  }
`;

const UPSERT_CUSTOMER = gql`
  mutation Upsert_Customer($customer: inp_Customer!) {
    upsert_Customer(customer: $customer) {
      id
    }
  }
`;

const CustomerMDEditor = observer((props: EntityEditorProps<Customer>) => {
  const {
    onCommit,
    entityInstance,
    submitBtnCaption = "common.submit"
  } = props;

  const [form] = useForm();

  const {
    executeLoadQuery,
    loadQueryResult: { loading: queryLoading, error: queryError },
    upsertMutationResult: { loading: upsertLoading },
    serverValidationErrors,
    intl,
    handleSubmit,
    handleSubmitFailed,
    handleCancelBtnClick
  } = useMasterDetailEditor<Customer>({
    loadQuery: LOAD_CUSTOMER,
    upsertMutation: UPSERT_CUSTOMER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onCommit,
    entityInstance,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form),
    resetEntityEditorForm: useCreateAntdResetForm(form)
  });

  if (queryLoading) {
    return <Spinner />;
  }

  if (queryError != null) {
    console.error(queryError);
    return <RetryDialog onRetry={executeLoadQuery} />;
  }

  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={handleSubmitFailed}
      layout="vertical"
      form={form}
      validateMessages={createAntdFormValidationMessages(intl)}
    >
      <Field
        entityName={ENTITY_NAME}
        propertyName="email"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="name"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
      />

      <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

      <Form.Item style={{ textAlign: "center" }}>
        <Button htmlType="button" onClick={handleCancelBtnClick}>
          <FormattedMessage id="common.cancel" />
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={upsertLoading}
          style={{ marginLeft: "8px" }}
        >
          <FormattedMessage id={submitBtnCaption} />
        </Button>
      </Form.Item>
    </Form>
  );
});

export default CustomerMDEditor;
