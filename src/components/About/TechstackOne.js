import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiLinux,
} from "react-icons/di";
import {
  SiStorybook,
  SiPostgresql,
  SiTypescript,
  SiGnubash,
} from "react-icons/si";

function TechstackOne() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        C
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "2vw", verticalAlign: "middle" }}>
          FreeRTOS
        </span>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <span style={{ fontSize: "2vw" }}>Exp with ARM</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "2vw" }}>STM32 board</span>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <span style={{ fontSize: "2vw" }}>I2C, SPI, UART, USART</span>
      </Col>
    </Row>
  );
}

export default TechstackOne;
