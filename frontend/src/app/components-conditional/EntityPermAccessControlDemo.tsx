import {AccessControl, EntityPermAccessControl} from "@haulmont/jmix-react-core";
import React from "react";
import {Button} from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export const EntityPermAccessControlDemo = () => {
  return (
    <>
      <Paragraph>
        If current user has the permission to <b>read</b> Customer entity, the "Read Customer" button will appear
        here:&nbsp;
        <EntityPermAccessControl entityName={"Customer"} operation={"read"}>
          <Button type={"primary"}>Delete Customer</Button>
        </EntityPermAccessControl>
      </Paragraph>

      <Paragraph>
        If current user has permission to <b>create</b> Customer entity, the "Create Customer" button will appear
        here:&nbsp;
        <EntityPermAccessControl entityName={"Customer"} operation={"create"}>
          <Button type={"primary"}>Create Customer</Button>
        </EntityPermAccessControl>
      </Paragraph>

      <Paragraph>
        If current user has the permission to <b>update</b> Customer entity, the "Update Customer" button will appear
        here:&nbsp;
        <EntityPermAccessControl entityName={"Customer"} operation={"update"}>
          <Button type={"primary"}>Update Customer</Button>
        </EntityPermAccessControl>
      </Paragraph>

      <Paragraph>
        If current user has the permission to <b>delete</b> Customer entity, the "Delete Customer" button will appear
        here:&nbsp;
        <EntityPermAccessControl entityName={"Customer"} operation={"delete"}>
          <Button type={"primary"}>Delete Customer</Button>
        </EntityPermAccessControl>
      </Paragraph>
    </>
  )
}