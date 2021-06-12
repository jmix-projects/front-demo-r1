import React from "react";
import CustomerMDEditor from "./CustomerMDEditor";
import CustomerMDList from "./CustomerMDList";
import {
  registerEntityBrowserScreen,
  registerRoute,
  MasterDetailManager
} from "@haulmont/jmix-react-ui";
import { observer } from "mobx-react";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerMasterDetail";

const CustomerMasterDetail = observer(() => {
  return (
    <MasterDetailManager
      editor={<CustomerMDEditor />}
      browser={<CustomerMDList />}
    />
  );
});

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "customerMasterDetail",
  <CustomerMasterDetail />,
  ENTITY_NAME,
  "CustomerMasterDetail"
);
registerEntityBrowserScreen(
  ENTITY_NAME,
  "customerMasterDetail",
  <CustomerMasterDetail />
);

export default CustomerMasterDetail;
