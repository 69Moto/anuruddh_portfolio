import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { TiHtml5 } from "react-icons/ti";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiCss3, SiBootstrap } from "react-icons/si";

import sephora from "../../Assets/Projects/sephora.jpg";
import nordstorm from "../../Assets/Projects/nordstorm.jpg";
// import editor from "../../Assets/Projects/codeEditor.png";
import translator from "../../Assets/Projects/translator.jpg";

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
              imgPath={sephora}
              isBlog={false}
              title="Sephora - Clone"
              description="Using HTML, CSS, Node.js & LocalStorage. I have built a clone of Sephora live witha team of 5, executed in 6 days, a clone of Sephora where users can buy various products."
              link1="https://github.com/HelloMoto069/Sephora-Clone"
              link2="https://sephora-clone.vercel.app/index.html"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<DiNodejs />}
              i4={<SiBootstrap />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nordstorm}
              isBlog={false}
              title="Nordstorm - Clone"
              description="Using HTML, CSS, Advanced JS & LocalStorage. A solo project executed in 7 days, a clone of Nordstorm where users can buy various products."
              link1="https://github.com/HelloMoto069/NORDSTORM-Clone"
              link2="https://nordstorm-clone-p034bk4m7-hellomoto069.vercel.app"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<SiCss3 />}
              i4={<SiBootstrap />}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Masai - Translator"
              description="Using HTML, CSS Javascript & API's. A web application that allows users to translate text one language to another.
              "
              link1="https://github.com/HelloMoto069/Translator-App"
              link2="https://translator-app-three.vercel.app"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<SiCss3 />}
              i4={<SiBootstrap />}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
