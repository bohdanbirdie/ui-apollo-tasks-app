import React from "react";
import { Row, Col } from "antd";

import { withLayout } from "../../components/layout/Layout";

export const DashboardPage = withLayout(() => {
  return (
    <Row justify="center" align="middle">
      <Col>Hello</Col>
    </Row>
  );
});
