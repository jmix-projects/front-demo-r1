import React from "react";
import {UseEntityListDataDemo} from "./UseEntityListDataDemo";
import {Card} from "antd";
import Text from "antd/es/typography/Text";

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