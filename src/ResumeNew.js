import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import pdf from "./res.pdf";
import { AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section ab-img " >
        <Row style={{  paddingLeft:"7%",position: "relative"}}>
          <Button href={pdf} target="_blank" className="bg-button" style={{ maxWidth: "250px" }}>
            <AiOutlineEye />&nbsp;
            View Resume
          </Button>
        </Row>
      </Container>
      
    </div>
  );
}

export default ResumeNew;
