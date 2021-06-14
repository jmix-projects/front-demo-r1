import React from "react";
import {useEntityListData, useMetadata} from "@haulmont/jmix-react-core";
import {useEntityList} from "@haulmont/jmix-react-ui";
import {gql} from "@apollo/client";
import {Product} from "../../jmix/entities/Product";
import {Order} from "../../jmix/entities/Order_";
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
