import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Sidebar from "../components/Sidebar";
export default function AppIndex() {
  return (
    <Row className="m-0 p-0">
      <Col md={2} className="m-0">
        <Sidebar />
      </Col>
      <Col md={10} className="bg-light">
        <Outlet />
      </Col>
    </Row>
  );
}
