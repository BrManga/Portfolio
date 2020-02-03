import React from "react";
import { Col, Card } from "react-bootstrap";
import "./projects.style.scss";

function ProjectLeft(props) {
  console.log(props);
  const {
    img,
    pageTitle,
    pageDescription,
    technologyTitle,
    technologyDescription,
    pageURL,
    codeURL
  } = props;
  return (
    <div className="backgroundLeft">
      <Col sm={6} className="projectImageCol">
        <div className="imageCard">
          <Card>
            <a href={pageURL} target="_blank" rel="noopener noreferrer" alt={pageTitle}>
            <Card.Img variant="top" src={img} className="projectCardImage" />
            </a>
          </Card>
        </div>
      </Col>{" "}
      <Col className="projectdescriptionCol ml-3" sm={1}>
        <div>
          <a href={pageURL} target="_blank" rel="noopener noreferrer">
            <button className="buttonProject">PAGE</button>
          </a>
        </div>
        <div>
          <a href={codeURL} target="_blank" rel="noopener noreferrer">
            <button className="buttonProject">CODE</button>
          </a>
        </div>
      </Col>
      <Col className="projectDescription">
        <h2>
          <strong>{pageTitle}</strong>{" "}
        </h2>
        <p>{pageDescription}</p>
        <h2 className="mt-5">
          <strong>{technologyTitle}</strong>{" "}
        </h2>
        <p>{technologyDescription} </p>
      </Col>
    </div>
  );
}

export default ProjectLeft;
