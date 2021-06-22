import React from "react";
import {DemoMenuHorizontal} from "./DemoMenuHorizontal";
import {registerScreen} from "@haulmont/jmix-react-ui";
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
    <Title level={3}>Ant Menu</Title>
  </div>
);

registerScreen({
  screenId: "MenuDemo",
  component: MenuDemoScreen,
  caption: "Menu Demo",
  menuOptions: {
    pathPattern: "/menu",
    menuLink: "/menu"
  }
});