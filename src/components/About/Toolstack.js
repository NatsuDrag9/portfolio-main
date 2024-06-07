import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbPoint } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> VsCode
        </span>
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> STM32 Cube IDE
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Postman
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Docker
        </span>
      </Col>
      <Col xs={2} md={6} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Debugging using oscilloscope and logic analyzer
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> GDB
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Ubuntu
        </span>
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Git and Github
        </span>
      </Col>
    </Row>
  );
}

export default Toolstack;
