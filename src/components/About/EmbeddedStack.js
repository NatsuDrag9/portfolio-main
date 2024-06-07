import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbPoint } from "react-icons/tb";

function EmbeddedStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> C
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> C++
        </span>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> RTOS and FreeRTOS
        </span>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Linux
        </span>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Shell scripting (Bash)
        </span>
      </Col>
      <Col xs={3} md={4} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Exp with ARM architecture
        </span>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Exp with STM32 MCU
        </span>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> Ethernet, SPI, I2C, UART, TCP/IP
        </span>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <span style={{ fontSize: "1.5vw", verticalAlign: "middle" }}>
          <TbPoint /> CPPUTest
        </span>
      </Col>
    </Row>
  );
}

export default EmbeddedStack;
