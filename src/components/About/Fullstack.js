import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbPoint } from "react-icons/tb";

function Fullstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Javascript
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Typescript
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> NodeJs
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> MongoDb
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> PostgreSQL
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Python
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Storybook
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Express
        </span>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> JEST and Vitest
        </span>
      </Col>
    </Row>
  );
}

export default Fullstack;
