import { Container } from "react-bootstrap";
import Particle from "../Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";

const verticalElementStyle = {
  background: "transparent",
  color: "#fff",
  boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
  opacity: "0.9",
  transition: "all 0.5s ease 0s",
};

const verticalElementArrowStyle = {
  borderRight: "7px solid  rgba(119, 53, 136, 1)",
};

function WorkExperience() {
  return (
    <Container fluid className="work-experience">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">experience </strong>
        </h1>

        <VerticalTimeline layout="1-column-left" className="vertical-timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={verticalElementStyle}
            contentArrowStyle={verticalElementArrowStyle}
            date="May, 2023 - May, 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<CgWorkAlt />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Engineer at Savart
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Savart</h4> */}
            <ul className="vertical-timeline__list">
              <li>
                Developed and maintained the frontend of Savart’s Portfolio
                Management Service using <span className="purple">React</span>{" "}
                and <span className="purple">TypeScript</span>
              </li>
              <li>
                Created reusable components with documentation in{" "}
                <span className="purple">Storybook</span>
              </li>
              <li>
                {" "}
                Created pages for document upload and identity verification
              </li>
              <li>
                {" "}
                Created the customer form with complete validation using Formik
              </li>
              <li>
                Build optimization techniques (in vite) -{" "}
                <span className="purple">chunking</span>:
                <ul>
                  <li>Implemented caching mechanisms for session storage </li>
                  <li>Reduced main application bundle size</li>
                  <li>Reduced deployment time</li>
                  <li>Reduced build time by 50%</li>
                </ul>
              </li>
              <li>
                Contributed to design improvements during cross-functional teams
                collaboration with UI team and Engineering Lead
              </li>
              <li>Test-driven Development of components</li>{" "}
              <li>
                Actively participated in code reviews and contributed to
                collaborative problem-solving discussions
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={verticalElementStyle}
            contentArrowStyle={verticalElementArrowStyle}
            date="Aug, 2021 - Dec, 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<CgWorkAlt />}
          >
            <h3 className="vertical-timeline-element-title">
              Student Worker at MoveInnovation
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">
              MoveInnovation
            </h4> */}
            <ul className="vertical-timeline__list">
              <li>Tested and debugged PCBs designed in-house</li>
              <li>
                Assembled and soldered multiple electronic devices (including
                SMDs)
              </li>
              <li>Worked with PCB schematics for testing and debugging</li>
              <li>Performed PCB quality assurance checks</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default WorkExperience;
