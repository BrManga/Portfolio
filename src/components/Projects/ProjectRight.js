import React from "react";
import { Col, Card } from "react-bootstrap";
import "./projects.style.scss";

function ProjectRight(props) {
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
    <div className="backgroundRight">
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
      <Col className="projectdescriptionCol mr-3" sm={1}>
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
      <Col sm={6} className="projectImageCol">
        <div className="imageCard">
          <Card>
            <Card.Img variant="top" src={img} className="projectCardImage" />
          </Card>
        </div>
      </Col>{" "}
    </div>
  );
}

export default ProjectRight;
