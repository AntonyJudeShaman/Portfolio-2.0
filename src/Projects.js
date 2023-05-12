import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import ml2 from "./ml2.jpg";
import ml from "./ml.png";
import cart from "./market.webp";
import crude from "./crude-oil-16542323314x3 (1).webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading myfont ">My Projects</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Shopping Based Project"
              description="An application that makes our shopping experience smoother and
              faster."
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={crude}
              isBlog={false}
              title="Crude Oil Price Prediction"
              description="A model that predicts future crude oil prices based on the
              datasets ."
              ghLink="https://github.com/AntonyJudeShaman/Crude-Oil-Price-Prediction"
            />
          </Col>

          

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Generative Adversarial Network"
              description="A simple GAN that was trained on the MNIST data with 20 epochs. "
              ghLink="https://github.com/AntonyJudeShaman/Simple-GAN"
            />
          </Col>
         

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={ml2}
              isBlog={false}
              title="Life Expectancy Prediction"
              description="A Model trained on the World Health Organization's life expectancy Dataset. It  is  a  Linear Regression."
              ghLink="https://github.com/AntonyJudeShaman/life-expectancy-prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
