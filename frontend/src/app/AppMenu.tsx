import React from "react";
import { VerticalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";
import { FormattedMessage } from "react-intl";

export const AppMenu = () => {
  return (
    <VerticalMenu>
      <MenuItem
        onClick={tabs.closeAll}
        icon={<HomeOutlined />}
        caption={"router.home"}
        key={"home"}
      />
      <SubMenuItem
        caption={"menu.Datatypes"}
        key={"7ef031d3-8a07-437b-bfef-7fc3800105cd"}
      >
        <MenuItem
          screenId={"DatatypesTestEntityList"}
          caption={"router.DatatypesTestEntityList"}
          key={"7ef031d3-8b07-437b-bfef-7fc3800100cd"}
        />
        <MenuItem
          screenId={"CompositionO2OTestEntityList"}
          caption={"router.CompositionO2OTestEntityList"}
          key={"62518b6c-54c7-4017-8b89-9ce6480a0cfc"}
        />
        <MenuItem
          screenId={"CompositionO2MTestEntityList"}
          caption={"router.CompositionO2MTestEntityList"}
          key={"aae139b5-829e-4c05-8119-bcb9977842e6"}
        />
      </SubMenuItem>
      <SubMenuItem caption={"Components"}>
        <MenuItem
          screenId={"VisualComponentsDemo"}
          caption={"Visual Components"}
          key={"de2945b3-7666-4adb-b8c9-q9d30e4ce4cb"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={"menu.Templates"}
        key={"7ef031d3-8a01-437b-bfef-7fc2800100cd"}
      >
        <MenuItem
          screenId={"DatatypesTestEntityEdit"}
          caption={"menu.DatatypesTestEntityList"}
          key={"7ef031d3-8b07-437b-bfef-7fc38001w0cd"}
        />
        <MenuItem
          screenId={"CustomerList"}
          caption={"menu.EntityManagement"}
          key={"38f79e27-d3fb-4558-845d-1c00e9d5eb18"}
        />
        <MenuItem
          screenId={"CustomerMasterDetail"}
          caption={"menu.CustomerMasterDetail"}
          key={"a3d62638-e75c-4f7a-be2e-261c79071dc0"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={"menu.Tools"}
        key={"7ef031d3-8a07-437b-bfef-7fc4800100cd"}
      >
        <MenuItem screenId={"JsxTreeDemo"} caption={"menu.JsxTree"} />
      </SubMenuItem>
      <MenuItem
        screenId={"MenuDemo"}
        caption={"router.MenuDemoScreen"}
        key={"930a8778-0e7b-4556-a878-ea8b45fb6ea3"}
      />
    </VerticalMenu>
  );
};
