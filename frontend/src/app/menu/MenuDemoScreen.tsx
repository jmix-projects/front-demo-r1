import React from "react";
import {DemoMenuHorizontal} from "./DemoMenuHorizontal";
import {registerRoute} from "@haulmont/jmix-react-ui";
import Title from "antd/es/typography/Title";
import {DemoMenuVertical} from "./DemoMenuVertical";

export const MenuDemoScreen = () => (
  <div>
    <Title level={3}>Horizontal Menu</Title>
    <DemoMenuHorizontal/>
    <br/>
    <Title level={3}>Vertical Menu</Title>
    <div style={{width: "300px"}}>
      <DemoMenuVertical/>
    </div>
  </div>
);

registerRoute(
  "/menu",
  "/menu",
  "Menu Demo",
  <MenuDemoScreen />,
  "MenuDemo",
  "MenuDemo"
);