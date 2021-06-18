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
import {CompositionO2MTestEntity} from "../../../jmix/entities/CompositionO2MTestEntity";

const ENTITY_NAME = "CompositionO2MTestEntity";
const ROUTING_PATH = "/compositionO2MTestEntityEditor";

const LOAD_COMPOSITIONO2MTESTENTITY = gql`
  query CompositionO2MTestEntityById($id: String = "", $loadItem: Boolean!) {
    CompositionO2MTestEntityById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      datatypesTestEntity {
        id
        _instanceName
        name
      }
      name
      quantity
    }
    DatatypesTestEntityList {
      id
      _instanceName
    }
  }
`;

const UPSERT_COMPOSITIONO2MTESTENTITY = gql`
  mutation Upsert_CompositionO2MTestEntity(
    $compositionO2MTestEntity: inp_CompositionO2MTestEntity!
  ) {
    upsert_CompositionO2MTestEntity(
      compositionO2MTestEntity: $compositionO2MTestEntity
    ) {
      id
    }
  }
`;

const CompositionO2MTestEntityEditor = observer(
  (props: EntityEditorProps<CompositionO2MTestEntity>) => {
    const {
      onCommit,
      entityInstance,
      submitBtnCaption = "common.submit"
    } = props;

    const [form] = useForm();

    const {
      relationOptions,
      executeLoadQuery,
      loadQueryResult: { loading: queryLoading, error: queryError },
      upsertMutationResult: { loading: upsertLoading },
      serverValidationErrors,
      intl,
      handleSubmit,
      handleSubmitFailed,
      handleCancelBtnClick
    } = useEntityEditor<CompositionO2MTestEntity>({
      loadQuery: LOAD_COMPOSITIONO2MTESTENTITY,
      upsertMutation: UPSERT_COMPOSITIONO2MTESTENTITY,
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
            propertyName="datatypesTestEntity"
            associationOptions={relationOptions?.get("DatatypesTestEntity")}
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

          <Field
            entityName={ENTITY_NAME}
            propertyName="quantity"
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
  }
);

registerEntityEditor({
  screenId: "compositionO2M",
  component: CompositionO2MTestEntityEditor,
  caption: "compositionO2M",
  entityName: ENTITY_NAME
})

export default CompositionO2MTestEntityEditor;
