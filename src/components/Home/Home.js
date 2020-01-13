import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import useTypewriter from "react-typewriter-hook";
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

const MagicOcean = [
  "up to date",
  "problem solver",
  "easy learner",
  "analytical thinker"
];
let index = 0;
function Home() {
  const [magicName, setMagicName] = useState("team player");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);
  return (
    <div className="container-fluid wrap">
      <RowWrap className="row">
        <Col sm={12} lg={5} className="photoWrap">
          <ProfilePhoto src={photo} alt="Profile Photo" />

          <Sliding>
            <p className="cursor">{name}</p>
          </Sliding>
        </Col>
        <Col lg={7} sm={12} className="profileInfoWrap">
          <div>
            <ProfileWrite className="text-center">
              <strong className="title">
                A lifelong learning web developer, father of two children...{" "}
              </strong>{" "}
            </ProfileWrite>
            <ProfileWrite font={"oblique"} className="description">
              Principles are sacred. Some of most important ones for me...
              <ul>
                <li>Balance in life</li>
                <li>Never stop to learning </li>
                <li>Character is more important than reputation</li>
                <li>Never give up </li>
              </ul>
            </ProfileWrite>
          </div>
          <Hr />
          <ProfileWrite>
            <div>
              <p className="text-center">
                <strong className="title">
                  As a web developer what i learned, so far...{" "}
                </strong>
              </p>

              <table className="mt-1 description">
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
    </div>
  );
}

const RowWrap = styled.div`
  border-radius: 15px 50px;
  margin: 0;
  align-items: center;
  @media (max-width: 1400px) {
    margin-right: 1rem !important;
  }
  @media (max-width: 1100px) {
    margin: 3rem !important;
  }
  @media (max-width: 1000px) {
    margin: 1rem !important;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
const ProfilePhoto = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  box-shadow: 10px 10px 5px grey;
  border-radius: 50px 1px;
  transition: filter 0.5s ease-in-out;
  @media (max-width: 1000px) {
    height: 300px;
    border-radius: 0;
    margin-bottom: 1rem;
  }
  @media (max-width: 500px) {
    height: 130px;
  }

  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`;
const Sliding = styled.span`
  display: none;
  font-size: 1.8rem;
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
  @media (max-width: 1100px) {
    display: block;
    text-align: center;
    align-self: center;
    width: 250px;
    margin-left: 1rem;
  }
  @media (max-width: 500px) {
    margin: 1rem !important;
    width: 120px;
    font-size: 0.8rem;
  }
`;
const Logos = styled.img`
  max-height: 1.8em;
  margin: 0.1em 1.5em;
  @media only screen and (max-width: 560px) {
    display:none;
  }
  }
`;
const ProfileWrite = styled.p`
  line-height: 2rem;
  margin-top: 1rem;
  font-family: "Titillium Web", sans-serif;
  font-style: ${props => props.font || "none"};
`;
const Hr = styled.hr`
  border: 0;
  margin: 0.4rem auto;
  max-width: 100%;
  background-position: 50%;
  box-sizing: border-box;
  height: auto;
  color: #2d3436;
  text-align: center;
  &:after {
    content: "★";
    font-size: 2em;
    text-shadow: -2em 0, -1em 0, 1em 0, 2em 0;
    @media (max-width: 1100px) {
      font-size: 1.2em;
    }
  }
`;
export default Home;
