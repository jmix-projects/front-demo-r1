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
          icon={<BarsOutlined />}
          caption={<FormattedMessage id={"router.DatatypesTestEntityList"} />}
          key={"7ef031d3-8b07-437b-bfef-7fc3800100cd"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={<FormattedMessage id={"menu.Tools"} />}
        key={"7ef031d3-8a07-437b-bfef-7fc2800100cd"}
      >
        <MenuItem
          screenId={"JsxTreeDemo"}
          caption={<FormattedMessage id={"menu.JsxTree"} />}
        />
      </SubMenuItem>
    </VerticalMenu>
  );
};
