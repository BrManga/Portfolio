import React from "react";
import styled from "styled-components";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Project(props) {
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
    <RowWrap style={{ display: "flex" }} className="row">
      <Col sm={6} style={{ margin: "4rem 2rem" }}>
        <ImageCard>
          <Card>
            <Card.Img variant="top" src={img} style={{ height: "250px" }} />
          </Card>
        </ImageCard>
      </Col>
      <Col style={{ marginTop: "4rem" }}>
        <h2 className="text-center">
          <strong>{pageTitle}</strong>{" "}
        </h2>
        <h3>{pageDescription}</h3>
        <h2 className="mt-5 text-center">
          <strong>{technologyTitle}</strong>{" "}
        </h2>
        <h3>{technologyDescription} </h3>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginRight: "2rem",
          flexDirection: "column"
        }}
        sm={1}
      >
        <div
          style={{
            borderRadius: "10px",
            padding: "1rem",
            marginTop:"5rem"
            
          }}
        >
          <a href={codeURL} target="_blank">
            <ButtonStyled href={pageURL} target="_blank" style={{marginTop:"3rem"}}>
              PAGE
            </ButtonStyled>
          </a>
        </div>
        <div
          style={{
            borderRadius: "10px",
            padding: "1rem",
            marginBottom:"5rem"

          }}
        >
          <a href={codeURL} target="_blank">
            <ButtonStyled style={{marginBottom:"3rem"}} >CODE</ButtonStyled>
          </a>
        </div>
      </Col>
    </RowWrap>
  );
}
const RowWrap = styled.div`
  box-shadow: 10px 10px 5px grey;
  
  display: inline-block;
  background: rgba(45, 52, 54, 0.8);
  color: white;
  margin-top: 5rem 
  }
`;
const ImageCard = styled.div`
  transition: all 0.3s ease 0s;
  &:hover {
    transform: scale(1.04);
    z-index: 114;
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
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: rgb(184, 233, 255);
    box-shadow: 0px 15px 20px rgba(184, 233, 255, 0.4);
    color: #2d3436;
    transform: translateY(-7px);
  }
`;
export default Project;
