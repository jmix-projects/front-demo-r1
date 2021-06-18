import React from "react";
import {Button, Card, Form} from "antd";
import {useForm} from "antd/es/form/Form";
import {observer} from "mobx-react";
import {FormattedMessage} from "react-intl";
import {
  createAntdFormValidationMessages,
  createUseAntdForm,
  createUseAntdFormValidation,
  EntityEditorProps,
  Field,
  GlobalErrorsAlert,
  registerEntityEditor,
  RetryDialog,
  Spinner,
  useEntityEditor
} from "@haulmont/jmix-react-ui";
import {gql} from "@apollo/client";
import "../../../app/App.css";
import {Customer} from "../../../jmix/entities/Customer";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerEditor";

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

const CustomerEditor = observer((props: EntityEditorProps<Customer>) => {
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
  } = useEntityEditor<Customer>({
    loadQuery: LOAD_CUSTOMER,
    upsertMutation: UPSERT_CUSTOMER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onCommit,
    entityInstance,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form)
  });

  if (queryLoading) {
    return <Spinner />;
  }

  if (queryError != null) {
    console.error(queryError);
    return <RetryDialog onRetry={executeLoadQuery} />;
  }

  return (
    <Card className="narrow-layout">
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
    </Card>
  );
});

registerEntityEditor({
  entityName: ENTITY_NAME,
  screenId: "CustomerEditor",
  component: CustomerEditor,
  caption: "Customer Editor"
})

export default CustomerEditor;
