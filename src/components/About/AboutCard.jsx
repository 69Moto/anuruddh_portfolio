import React from "react";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anuruddh Singh </span>
            from <span className="purple"> Kanpur, Uttar-Pradesh, India.</span>
            <br />I am an aspiring full stack web developer with experience in
            effective collaboration and a keen interest in solving problems and
            coming up with effective solutions. With a good understanding of
            Data Structures and Algorithms, proficiency in React, and with a
            stronghold on MERN stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Story / Script Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Hikking & Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anuruddh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
