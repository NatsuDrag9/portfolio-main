import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbPoint } from "react-icons/tb";

function Fullstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Javascript
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> Typescript
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> NodeJs
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> MongoDb
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> PostgreSQL
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> Python
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> Storybook
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> Express
        </span>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <span className="techstack__element">
          <TbPoint /> JEST and Vitest
        </span>
      </Col>
    </Row>
  );
}

export default Fullstack;
