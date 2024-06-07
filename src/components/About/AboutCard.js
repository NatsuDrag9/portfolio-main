import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Rohit Imandi.</span>
            {/* from <span className="purple"> Bhubaneswar, India.</span> */}
            <br />
            <br />
            A versatile software developer with experience in fullstack
            development as well as embedded software development. <br /> <br />
            <br />I completed my MSC in Sustainable Energy from{" "}
            <span className="purple">
              Technical University of Denmark (DTU), Denmark.
            </span>{" "}
            and did my B.Tech in Electronics and Communication Engineering from{" "}
            <span className="purple">Bennett University, India.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Retro Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching videos on electronics and DIY projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Commitment to excellence is about eliminating mediocrity today!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
