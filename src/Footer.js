import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./style.css";
import logo from "./log.svg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer ">
      <Row>
        <Col md="4" className="footer-copywright ">
          <h3>Copyright 2023 © AJS</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Antony Jude Shaman</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons ">
              <a
                href="https://github.com/antonyjudeshaman"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://api.whatsapp.com/send/?phone=6379223180&text&type=phone_number&app_absent=0"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons ">
              <a
                href="https://www.linkedin.com/in/antony-jude-shaman/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons ">
              <a
                href="mailto:antonyjudeshaman.24cs@licet.ac.in"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons ">
              <a
                href="tel:6379223180"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlinePhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/stark_shaman/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
