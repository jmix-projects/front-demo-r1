import React from "react";
import {UseEntityListDataDemo} from "./UseEntityListDataDemo";
import {Card} from "antd";
import Text from "antd/es/typography/Text";
import {registerScreen} from "@haulmont/jmix-react-ui";

export const DataComponentsDemo = () => {
  return (
    <div>
      <Card title={
        <>
          <Text code={true}>useEntityListData()</Text> demo
        </>
      }>
        <UseEntityListDataDemo/>
      </Card>
    </div>
  )
};

registerScreen({
  screenId: "DataComponentsDemo",
  component: DataComponentsDemo,
  caption: "Data Components Demo",
  menuOptions: {
    menuLink: "/data-components",
    pathPattern: "/data-components"
  }
})