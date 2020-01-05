import React from "react";
import styled from "styled-components";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <RowWrap style={{ display: "flex" }} className="backgroundyr">
    <Col className="projectDescription">
      <h2 className="text-center">
        <strong>{pageTitle}</strong>{" "}
      </h2>
      <p style={{ fontSize: "1rem" }}>{pageDescription}</p>
      <h2 className="mt-5 text-center">
        <strong>{technologyTitle}</strong>{" "}
      </h2>
      <p style={{ fontSize: "1rem" }}>{technologyDescription} </p>
    </Col>
    <Col
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "2rem",
        flexDirection: "column"
      }}
      sm={1}
    >
      <div
        style={{
          borderRadius: "10px",
          paddingBottom: "1rem"
        }}
      >
        <a href={codeURL} target="_blank">
          <ButtonStyled href={pageURL} target="_blank">
            PAGE
          </ButtonStyled>
        </a>
      </div>
      <div
        style={{
          borderRadius: "10px",
          paddingTop: "1rem"
        }}
      >
        <a href={codeURL} target="_blank">
          <ButtonStyled>CODE</ButtonStyled>
        </a>
      </div>
    </Col>
    <Col sm={6} style={{ alignSelf: "center" }}>
      <ImageCard>
        <Card>
          <Card.Img variant="top" src={img} style={{ height: "250px" }} />
        </Card>
      </ImageCard>
    </Col>{" "}
  </RowWrap>
);
}
const RowWrap = styled.div`

${"" /* background: rgba(45, 52, 54, 0.8); */}

color: black;
padding: 3rem;
margin:2rem;

}
`;
const ImageCard = styled.div`
transition: all 0.3s ease 0s;
position: relative;
min-width: 250px;
border: 5px solid transparent;
${"" /* box-shadow: 10px 10px 42px 0 rgba(0,0,0,0.75); */}
&:hover {
  animation: animate 2s linear forwards;
  box-shadow: 10px 15px 20px rgba(76, 78, 79, 0.9);
  transform: translateY(-7px);
}
@keyframes animate {
  0% {
    border-top-color: #7d807f;
  }
  35% {
    border-top-color: #7d807f;
    border-right-color: #7d807f;
  }
  65% {
    border-top-color: #7d807f;
    border-bottom-color: #7d807f;
    border-right-color: #7d807f;
  }
  100% {
    border-color: #7d807f;
  }
}

`;
const ButtonStyled = styled.button`
width: 100px;
height: 45px;
font-family: "Roboto", sans-serif;
font-size: 1.3rem;
text-transform: uppercase;
letter-spacing: 2.5px;
font-weight: bold;
color: white !important;
background-color: #2d3436;
border: none;
border-radius: 45px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;
&:hover {
  background-color: white;
  box-shadow: 0px 15px 20px rgba(76, 78, 79, 0.9);
  color: #2d3436 !important;
  transform: translateY(-7px);
}
`;
export default ProjectRight;
