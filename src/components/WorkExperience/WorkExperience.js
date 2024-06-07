import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function WorkExperience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">experience </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}></Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;
