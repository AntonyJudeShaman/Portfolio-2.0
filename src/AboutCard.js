import React from "react";
import Card from "react-bootstrap/Card";
import {
  ImCoinDollar,
  ImCoinPound,
  ImMusic,
  ImPlay,
  ImPlay3,
  ImPointRight,
  ImSearch,
} from "react-icons/im";
import {} from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <p style={{ justifyContent: "center" }}>
            Hello , I am Antony Jude Shaman from Chennai, India.
            <br />I am currently pursuing B.E CSE in Loyola-ICAM College Of
            Engineering and Technology
            <br />
            <br />Some of are Hobbies include
          </p>
          <ul style={{ justifyContent: "center" }}>
            <li className="about-activity">
              Playing Games  
            </li>
            <li className="about-activity">
              Listening to Music   
            </li>
            <li className="about-activity">
               Eating Different Foods 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
