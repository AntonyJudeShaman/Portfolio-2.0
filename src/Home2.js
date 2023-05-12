import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "./prof.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./style.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description tiltneon">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="myfont"> Wanna Know About Me </span>
            </h1>
            <p className="home-about-body">
              I am an energetic, ambitious person who has developed a mature and
              responsible approach to any task that I undertake. <br />
              Looking forward to improve my skills by exploring various fields
              of knowledge. <br /><br/>
              My field of Interests are <span className="myfont">Full Stack Development, Deep Learning and Data Analysis.</span> &nbsp;
              
              <br />
              <br />
              I am also keen to develop my Skills on various new tools and technologies and try to adapt to the current advancements in technology.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid logo1" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
