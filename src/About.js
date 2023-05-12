import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section bg-image img-fluid tiltneon">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "3em", paddingBottom: "20px", paddingTop: "20px" }} className="myfont">
             About Me!
            </h1>
            <Aboutcard />
          </Col>
          
        </Row>
        <h1 className="project-heading myfont" style={{ fontSize: "3rem"}}>
          Technical Skills 
        </h1>

        <Techstack />

        <h1 className="project-heading myfont" style={{ fontSize: "3rem"}}>
          Tools
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
