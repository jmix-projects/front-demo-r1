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
        caption={<FormattedMessage id="router.home" />}
        key={"home"}
      />
      <SubMenuItem
        caption={<FormattedMessage id={"menu.Datatypes"} />}
        key={"7ef031d3-8a07-437b-bfef-7fc3800105cd"}
      >
        <MenuItem
          screenId={"DatatypesTestEntityList"}
          caption={<FormattedMessage id={"router.DatatypesTestEntityList"} />}
          key={"7ef031d3-8b07-437b-bfef-7fc3800100cd"}
        />
        <MenuItem
          screenId={"CompositionO2OTestEntityList"}
          caption={
            <FormattedMessage id={"router.CompositionO2OTestEntityList"} />
          }
          key={"62518b6c-54c7-4017-8b89-9ce6480a0cfc"}
        />
        <MenuItem
          screenId={"CompositionO2MTestEntityList"}
          caption={
            <FormattedMessage id={"router.CompositionO2MTestEntityList"} />
          }
          key={"aae139b5-829e-4c05-8119-bcb9977842e6"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={<FormattedMessage id={"menu.Templates"} />}
        key={"7ef031d3-8a01-437b-bfef-7fc2800100cd"}
      >
        <MenuItem
          screenId={"DatatypesTestEntityEdit"}
          caption={<FormattedMessage id={"menu.DatatypesTestEntityList"} />}
          key={"7ef031d3-8b07-437b-bfef-7fc38001w0cd"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={<FormattedMessage id={"menu.Tools"} />}
        key={"7ef031d3-8a07-437b-bfef-7fc4800100cd"}
      >
        <MenuItem
          screenId={"JsxTreeDemo"}
          caption={<FormattedMessage id={"menu.JsxTree"} />}
        />
      </SubMenuItem>
      <MenuItem
        screenId={"MenuDemo"}
        caption={<FormattedMessage id={"router.MenuDemoScreen"} />}
        key={"930a8778-0e7b-4556-a878-ea8b45fb6ea3"}
      />
    </VerticalMenu>
  );
};
