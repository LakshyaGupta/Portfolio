import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import volassis from "../../Assets/Projects/blog.png";
import gan from "../../Assets/Projects/blog.png";
import icovid from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volassis}
              isBlog={false}
              title="Volassis Automated Volunteer System"
              description="- Mobile application to automate volunteer management (check-in/check-out, track hours, approve/claim hours, find volunteer opportunities), and automate volunteer workflow for organizations
              - Cross-platform mobile app with ReactNative for the frontend and Java and MySQL on AWS as backend
              - Launched on Apple App Store and Google Play Store
              - Currently has 105 users and 12 organizations"
              ghLink="https://apps.apple.com/us/app/volassis/id1556276650"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icovid}
              isBlog={false}
              title="iCovid Mobile App"
              description="- An efficient way to spread knowledge about Covid-19 and enable citizens to practice safe behaviors through reminders and notifications
              - Users could log data on number of times, mask, gloves and washed hands and the app would give suggestions through AI based off of this
              - Cross-platform mobile app with ReactNative, Node.js, Ruby, JavaScript, Maven, Swift, Expo, Cocoa, and Spring Boot
              - Launched on Google Play Store"
              ghLink="https://play.google.com/store/apps/details?id=com.LakshyaGupta.iRemind1&pli=1"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="Future Stock Predictor GAN"
              description="- AI model that would predict the future return rates of different stocks based on historical data
              - Stored future stock data into MongoDB
              - Utilized Tiingo API to retrieve data
              - Created the ML using Python with numpy and pandas libraries
              - Created the UI using HTML, CSS, and JS"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
