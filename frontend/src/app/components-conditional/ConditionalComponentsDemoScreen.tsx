import React from "react";
import {Card, Space} from "antd";
import {IFComponentDemo} from "./IFComponentDemo";
import {TimerComponentDemo} from "./TimerComponentDemo";
import {registerRoute} from "@haulmont/jmix-react-ui";
import {EntityPermAccessControlDemo} from "./EntityPermAccessControlDemo";
import {AttrPermAccessControlDemo} from "./AttrPermAccessControlDemo";

export const ConditionalComponentsDemoScreen = () => (
  <Space direction={"vertical"} style={{width: "100%"}}>
    <Card title={'<IF>'}>
      <IFComponentDemo/>
    </Card>
    <Card title={'useTimer'}>
      <TimerComponentDemo/>
    </Card>
    <Card title={'<EntityPermAccessControl>'}>
      <EntityPermAccessControlDemo/>
    </Card>
    <Card title={'<AttrPermAccessControl>'}>
      <AttrPermAccessControlDemo/>
    </Card>
  </Space>
);


registerRoute(
  "/conditional-components",
  "/conditional-components",
  "Conditional Components Demo",
  <ConditionalComponentsDemoScreen/>,
  "ConditionalComponentsDemoScreen",
  "ConditionalComponentsDemoScreen"
);