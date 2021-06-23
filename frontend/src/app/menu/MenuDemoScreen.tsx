import React from "react";
import {DemoMenuHorizontal} from "./DemoMenuHorizontal";
import {registerScreen} from "@haulmont/jmix-react-ui";
import Title from "antd/es/typography/Title";
import {DemoMenuVertical} from "./DemoMenuVertical";
import {DemoMenuSwitcher} from "./DemoMenuSwitcher";

export const MenuDemoScreen = () => (
  <div>
    <Title level={3}>Horizontal Menu</Title>
    <DemoMenuHorizontal/>
    <br/>
    <Title level={3}>Vertical Menu</Title>
    <div style={{width: "300px"}}>
      <DemoMenuVertical/>
    </div>
    <br/>
    <Title level={3}>Menu Types Switch</Title>
    <div style={{width: "300px"}}>
      <DemoMenuSwitcher/>
    </div>
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