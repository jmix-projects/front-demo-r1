import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";
import CustomerList from "../entity-list/CustomerList";

export const BlankTemplateDemo = () => <div>BlankTemplateDemo</div>;


registerRoute(
  `/templates/blank`,
  `/templates/blank`,
  "Blank Component",
  <BlankTemplateDemo />,
  "BlankTemplateDemo",
  "BlankTemplateDemo"
);