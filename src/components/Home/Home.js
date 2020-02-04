import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import useTypewriter from "react-typewriter-hook";
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
import "./home.styles.scss";
import { Animated } from "react-animated-css";

const MagicOcean = [
  "Zafer Bora Manga",
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
    <div className="wrap">
      <Animated animationIn="shake" animationInDelay={2000} isVisible={true}>
        <p className="myname"> Zafer Bora Manga</p>
      </Animated>
      <div>
        <div className="row rowWrap">
          <Col sm={12} lg={5} className="photoWrap">
            <div className="profilePhoto" />
            <span className="sliding">
              <p className="cursor">{name}</p>
            </span>
          </Col>
          <Col lg={7} sm={12} className="profileInfoWrap">
            <div className="profileInfoWrapDiv">
              <ProfileWrite className="text-center my-3">
                <strong className="description titleFather">
                  A lifelong learning web developer, <br />
                  father of two children...{" "}
                </strong>{" "}
              </ProfileWrite>
              <ProfileWrite font={"oblique"} className="description ">
                <span className="titleOther">
                  Principles are sacred. Some of most important ones for me...
                </span>
                <ul>
                  <li>Balance in life</li>
                  <li>Never stop to learning </li>
                  <li>Character is more important than reputation</li>
                  <li>Never give up </li>
                </ul>
              </ProfileWrite>
            </div>
            <hr className="stars" />
            <ProfileWrite>
              <div className="description">
                <p className="text-center titleOther">
                  <strong>As a web developer what i learned, so far... </strong>
                </p>

                <table className="mt-1 description bigSc ">
                  <tr>
                    <td>• HTML</td>
                    <td>
                      <img className="logos" src={html} alt="HTML Logo"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>• CSS (Bootstrap, SASS)</td>
                    <td>
                      <img className="logos" src={css} alt="CSS Logo"></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={bootstrap}
                        alt="Bootstrap Logo"
                      ></img>
                    </td>
                    <td>
                      <img className="logos" src={sass} alt="SASS Logo"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>• JavaScript (jQuery)</td>
                    <td>
                      <img className="logos" src={js} alt="JS Logo"></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={jquery}
                        alt="JQUERY Logo"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td>• React (Redux)</td>
                    <td>
                      <img className="logos" src={react} alt="REACT Logo"></img>
                    </td>
                    <td>
                      <img className="logos" src={redux} alt="REDUX Logo"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>• Node.js (Express)</td>
                    <td>
                      <img
                        className="logos"
                        src={nodejs}
                        alt="NODEJS Logo"
                      ></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={express}
                        alt="EXPRESS Logo"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td>• MongoDB (Mongoose)</td>
                    <td>
                      <img
                        className="logos"
                        src={mongodb}
                        alt="MONGODB Logo"
                      ></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={mongoose}
                        alt="MONGOOSE Logo"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td>• Github</td>
                    <td>
                      <img
                        className="logos"
                        src={github}
                        alt="GITHUB Logo"
                      ></img>
                    </td>
                  </tr>
                </table>
                <table className="mt-1 description smSc">
                  <tr>
                    <td>
                      <img className="logos" src={html} alt="HTML Logo"></img>
                    </td>
                    <td>
                      <img className="logos" src={css} alt="CSS Logo"></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={bootstrap}
                        alt="Bootstrap Logo"
                      ></img>
                    </td>
                    <td>
                      <img className="logos" src={sass} alt="SASS Logo"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img className="logos" src={js} alt="JS Logo"></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={jquery}
                        alt="JQUERY Logo"
                      ></img>
                    </td>

                    <td>
                      <img className="logos" src={react} alt="REACT Logo"></img>
                    </td>
                    <td>
                      <img className="logos" src={redux} alt="REDUX Logo"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="logos"
                        src={nodejs}
                        alt="NODEJS Logo"
                      ></img>
                    </td>

                    <td>
                      <img
                        className="logos"
                        src={express}
                        alt="EXPRESS Logo"
                      ></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={mongodb}
                        alt="MONGODB Logo"
                      ></img>
                    </td>
                    <td>
                      <img
                        className="logos"
                        src={mongoose}
                        alt="MONGOOSE Logo"
                      ></img>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>
                      <img
                        className="logos"
                        src={github}
                        alt="GITHUB Logo"
                      ></img>
                    </td>
                  </tr>
                </table>
              </div>
            </ProfileWrite>
          </Col>
        </div>
      </div>
    </div>
  );
}
const ProfileWrite = styled.p`
  line-height: 2rem;
  margin-top: 1rem;
  font-family: "Titillium Web", sans-serif;
  font-style: ${props => props.font || "none"};
  @media (max-width: 800px) {
    margin: 0;
    line-height: 1.2rem;
  }
`;
export default Home;
