import React from "react";
import styled from "styled-components";
import { Col,Row } from "react-bootstrap";
import photo from "../../assets/profile_photo.jpeg";
import html from "../../assets/webLogos/html.png";
import css from "../../assets/webLogos/css.png";
import bootstrap from "../../assets/webLogos/bootstrap.png";
import sass from "../../assets/webLogos/sass.png";
import js from "../../assets/webLogos/js.png";
import jquery from "../../assets/webLogos/jquery.png";
import react from "../../assets/webLogos/react.png";
import redux from "../../assets/webLogos/redux.png";
import nodejs from "../../assets/webLogos/nodejs.png";
import express from "../../assets/webLogos/express.png";
import mongodb from "../../assets/webLogos/mongodb.png";
import mongoose from "../../assets/webLogos/mongoose.png";
import github from "../../assets/webLogos/github.png";
import Video from "../Video/Video";

function Home() {
  return (
    <>
    <Wrap className="container">
      <RowWrap className="row">
        <Col sm={4} style={{ display: "flex", alignItems: "center" }}>
          <ProfilePhoto src={photo} alt="Profile Photo" />
        </Col>
        <Col sm={{ offset: 1, span: 7 }} className="mt-5 mb-2">
          <ProfileWrite>
            <strong>
              A lifelong learning web developer, father of two children...{" "}
            </strong>{" "}
          </ProfileWrite>
          <ProfileWrite font={"oblique"}>
            Principles are sacred. Some of most important ones for me... <br />{" "}
            - Balance in life <br /> - Never stop to learning <br /> - Character
            is more important than reputation <br /> - Never give up{" "}
          </ProfileWrite>
          <ProfileWrite>
            <div>
              As a web developer what i learned, so far... <br />
              <table>
                <tr>
                  <td>- HTML</td>
                  <td>
                    <Logos src={html} alt="HTML Logo"></Logos>
                  </td>
                </tr>
                <tr>
                  <td>- CSS(Bootstrap, SASS)</td>
                  <td>
                    <Logos src={css} alt="CSS Logo"></Logos>
                  </td>
                  <td>
                    <Logos src={bootstrap} alt="Bootstrap Logo"></Logos>
                  </td>
                  <td>
                    <Logos src={sass} alt="SASS Logo"></Logos>
                  </td>
                </tr>
                <tr>
                  <td>- JavaScript(jQuery)</td>
                  <td>
                    <Logos src={js} alt="JS Logo"></Logos>
                  </td>
                  <td>
                    <Logos src={jquery} alt="JQUERY Logo"></Logos>
                  </td>
                </tr>
                <tr>
                  <td>- React (Redux)</td>
                  <td>
                    <Logos src={react} alt="REACT Logo"></Logos>
                  </td>
                  <td>
                    <Logos src={redux} alt="REDUX Logo"></Logos>
                  </td>
                </tr>
                <tr>
                  <td>- Node.js (Express)</td>
                  <td>
                    <Logos src={nodejs} alt="NODEJS Logo"></Logos>
                  </td>
                  <td>
                    <Logos src={express} alt="EXPRESS Logo"></Logos>
                  </td>
                </tr>
                <tr>
                  <td>- MongoDB(Mongoose)</td>
                  <td>
                    <Logos src={mongodb} alt="MONGODB Logo"></Logos>
                  </td>
                  <td>
                    <Logos src={mongoose} alt="MONGOOSE Logo"></Logos>
                  </td>
                </tr>
                <tr>
                  <td>- Github</td>
                  <td>
                    <Logos src={github} alt="GITHUB Logo"></Logos>
                  </td>
                </tr>
              </table>
            </div>
          </ProfileWrite>
        </Col>
      </RowWrap>
      <Row>
      <Video/></Row>
    </Wrap>
    </>
  );
}

const Wrap = styled.div`
width:100%;
  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s; /* Firefox < 16 */
  animation: fadein 4s;
  animation-fill-mode: forwards;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const RowWrap = styled.div`
width:100%;
  margin-top: 6rem;
  background-color: papayawhip;
  box-shadow: 10px 10px 5px grey;
  border-radius: 15px 50px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 680px) and (-webkit-min-device-pixel-ratio: 2) {
    border-radius: 0px;
    margin-top: 4rem;
  }
`;
const ProfilePhoto = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 10px 10px 5px grey;
  border-radius: 15px 50px;
  transition: filter 0.5s ease-in-out;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`;
const Logos = styled.img`
  max-height: 1.8em;
  margin: 0.1em 1.5em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }
`;
const ProfileWrite = styled.h2`
  margin-top: 1rem;
  font-family: "Titillium Web", sans-serif;
  font-style: ${props => props.font || "none"};
`;

export default Home;
