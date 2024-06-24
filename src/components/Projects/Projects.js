import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import freeRtos from "../../Assets/Projects/free_rtos.webp";
import tetrisGame from "../../Assets/Projects/Game_single_player_mdpi.png";
import serialProtocol from "../../Assets/Projects/driver_layer.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tetrisGame}
              isBlog={false}
              title="Tetris Multiplayer"
              description="Tetris Multiplayer is a fullstack web application built using React, Typescript, NodeJs and Express that allows users to play the classic game of Tetris either solo or against friends in real-time multiplayer mode. Real time functionality was implemented using WebSockets"
              ghLink="https://github.com/NatsuDrag9/tetris-multiplayer"
              // demoLink=""
              wikiLink="https://github.com/NatsuDrag9/tetris-multiplayer/wiki/Recruiters"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Editor (Contributing to this open source project)"
              description="An online code-editor, where you can write python, cpp, javascript, java, and react code in your browser and see the output in the same window. Except for react, all other languages are executed on the server-side in an isolated environment to ensure security."
              ghLink="https://github.com/NatsuDrag9/code-editor"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serialProtocol}
              isBlog={false}
              title="Serial Protocol Library from scratch"
              description="This is a firmware library written from scratch in C for ARM Cortex microprocessor for serial protocols. The library provides apis for I2C, SPI, GPIO and USART that an embedded systems's application layer (client) can use."
              ghLink="https://github.com/NatsuDrag9/STM32f413xx-drivers-from-scratch"
              // demoLink="https://plant49-ai.herokuapp.com/"
              wikiLink="https://github.com/NatsuDrag9/STM32f413xx-drivers-from-scratch/wiki/Recruiters"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freeRtos}
              isBlog={false}
              title="Blink LEDs and control RTC using FreeRTOS"
              description="This is an application on the STM32F413ZH board using FreeRTOS task scheduling to blink on-board LEDs at set intervals and configure real-time clock functionalities."
              ghLink="https://github.com/NatsuDrag9/FreeRTOS-LED-and-RTC-Using-Timers-STM32?tab=readme-ov-file"
              // demoLink="https://plant49-ai.herokuapp.com/"
              wikiLink="https://rohitimandi.medium.com/freertos-led-and-rtc-using-timers-stm32-f975b20d7e63"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
