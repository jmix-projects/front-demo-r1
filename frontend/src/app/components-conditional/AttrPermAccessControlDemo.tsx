import {AttrPermAccessControl} from "@haulmont/jmix-react-core";
import React from "react";
import Paragraph from "antd/es/typography/Paragraph";
import {Button} from "antd";

export const AttrPermAccessControlDemo = () => {
  return (
    <>
      <Paragraph>
        If current user has permission to <b>view</b> the <b>name</b> attribute of Customer entity, the "View name of
        some Customer" button will appear
        here:&nbsp;
        <AttrPermAccessControl entityName={"Customer"} attrName={"name"} requiredAttrPerm={"VIEW"}>
          <Button type={"primary"}>View name of some Customer</Button>
        </AttrPermAccessControl>
      </Paragraph>

      <Paragraph>
        If current user has permission to <b>modify</b> the <b>name</b> attribute of Customer entity, the "Modify some
        Customer" button will appear
        here:&nbsp;
        <AttrPermAccessControl entityName={"Customer"} attrName={"name"} requiredAttrPerm={"MODIFY"}>
          <Button type={"primary"}>Modify name of some Customer</Button>
        </AttrPermAccessControl>
      </Paragraph>
    </>
  )
}