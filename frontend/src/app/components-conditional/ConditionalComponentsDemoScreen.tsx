import React from "react";
import {Card, Space} from "antd";
import {IFComponentDemo} from "./IFComponentDemo";
import {TimerComponentDemo} from "./TimerComponentDemo";

export const ConditionalComponentsDemoScreen = () => (
  <Space direction={"vertical"} style={{width: "100%"}}>
    <Card title={'IF'}>
      <IFComponentDemo/>
    </Card>
    <Card title={'Timer'}>
      <TimerComponentDemo/>
    </Card>
  </Space>
);
