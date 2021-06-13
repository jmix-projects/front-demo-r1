import { Row, Col, Card } from "antd";
import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";
import CustomerMasterDetail from "../master-detail/CustomerMasterDetail";

export const StructureDemo = () => (
  <Row gutter={16}>
    <Col span={18}>
      <Card title="Column one header">Content</Card>
    </Col>

    <Col span={6}>
      <Card title="Column two header">Content</Card>
    </Col>
  </Row>
);


registerRoute(
  `/templates/structure`,
  `/templates/structure`,
  "Structure Demo",
  <StructureDemo />,
  `StructureDemo`,
  `StructureDemo`
);