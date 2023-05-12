import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home-main.png";
import Particle from "./Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello
                <span className="wave"  aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading">
                
                <strong className="main-name tiltneon"> I am <Type /></strong>
                
              </h1>
              

             
            </Col>

            <Col md={5} style={{ paddingBottom: 150 }}>
              <img
                src={homeLogo}
                alt="Missing!!!"
                className="img-fluid home-padding"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
