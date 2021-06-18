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
  registerEntityList,
  RetryDialog,
  Spinner,
  useEntityEditor
} from "@haulmont/jmix-react-ui";
import {gql} from "@apollo/client";
import "../../../app/App.css";
import {CompositionO2OTestEntity} from "../../../jmix/entities/CompositionO2OTestEntity";

const ENTITY_NAME = "CompositionO2OTestEntity";
const ROUTING_PATH = "/compositionO2OTestEntityEditor";

const LOAD_COMPOSITIONO2OTESTENTITY = gql`
  query CompositionO2OTestEntityById($id: String = "", $loadItem: Boolean!) {
    CompositionO2OTestEntityById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      name
      nestedComposition {
        id
        _instanceName
        name
      }
      quantity
    }
  }
`;

const UPSERT_COMPOSITIONO2OTESTENTITY = gql`
  mutation Upsert_CompositionO2OTestEntity(
    $compositionO2OTestEntity: inp_CompositionO2OTestEntity!
  ) {
    upsert_CompositionO2OTestEntity(
      compositionO2OTestEntity: $compositionO2OTestEntity
    ) {
      id
    }
  }
`;

const CompositionO2OTestEntityEditor = observer(
  (props: EntityEditorProps<CompositionO2OTestEntity>) => {
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
    } = useEntityEditor<CompositionO2OTestEntity>({
      loadQuery: LOAD_COMPOSITIONO2OTESTENTITY,
      upsertMutation: UPSERT_COMPOSITIONO2OTESTENTITY,
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
            propertyName="name"
            formItemProps={{
              style: { marginBottom: "12px" }
            }}
          />

          <Field
            entityName={ENTITY_NAME}
            propertyName="nestedComposition"
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

registerEntityList({
  entityName: ENTITY_NAME,
  screenId: "CompositionO2OTestEntityEditor",
  component: CompositionO2OTestEntityEditor,
  caption: "Composition O2O Editor"
})

export default CompositionO2OTestEntityEditor;
