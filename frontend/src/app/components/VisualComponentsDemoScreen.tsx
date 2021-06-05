import React from "react";
import {createAntdFormValidationMessages, Field, FormField, registerRoute} from "@haulmont/jmix-react-ui";
import {Card, Form} from "antd";

export const VisualComponentsDemoScreen = () => (
  <div>
    <Card title={"Form Field"}>
      <Form>
        <Field
          entityName={"DatatypesTestEntity"}
          propertyName="localTimeAttr"
        />
        <Field
          entityName={"DatatypesTestEntity"}
          propertyName="associationM2Oattr"
        />
      </Form>
    </Card>
  </div>
);

registerRoute(
  "/components/visual",
  "/components/visual",
  "Visual Components",
  <VisualComponentsDemoScreen />,
  "",
  "VisualComponentsDemo"
);