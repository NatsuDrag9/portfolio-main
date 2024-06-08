import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbPoint } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> VsCode
        </div>
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> STM32 Cube IDE
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Postman
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Docker
        </div>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Debugging using oscilloscope and logic analyzer
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> GDB
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Ubuntu
        </div>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Git and Github
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
