import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbPoint } from "react-icons/tb";

function EmbeddedStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> C
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> C++
        </div>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> RTOS and FreeRTOS
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Linux
        </div>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Shell scripting (Bash)
        </div>
      </Col>
      <Col xs={3} md={4} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Exp with ARM architecture
        </div>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Exp with STM32 MCU
        </div>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> Ethernet, SPI, I2C, UART, TCP/IP
        </div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="techstack__element">
          <TbPoint /> CPPUTest
        </div>
      </Col>
    </Row>
  );
}

export default EmbeddedStack;
