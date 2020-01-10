import React from "react";
import styled from "styled-components";
import { Col, Card, Button } from "react-bootstrap";
import img from "../../assets/Projects/resorthotelsm.png";
import img1 from "../../assets/Projects/weatherapp.png";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

function Projects() {
  const state = [
    [
      {
        img: img1,
        pageTitle: "Weather App",
        pageDescription:
          "Weather app is using Openweathermap API to bring users the current weather and time in targeted city",
        technologyTitle: "Technologies Used",
        technologyDescription: "HTML, CSS, Bootstrap, JS",
        pageURL: "https://brave-wiles-6d83c2.netlify.com/",
        codeURL: "https://github.com/BrManga/WeatherApp"
      },
      {
        img: img,
        pageTitle: "Luxurious Rooms",
        pageDescription:
          "A hotel reservation project made for the learning purposes",
        technologyTitle: "Technologies Used",
        technologyDescription: "React, Redux, Bootstrap bla bla bla bla bla",
        pageURL: "https://best-beach-resort-hotel.netlify.com/",
        codeURL: "https://github.com/BrManga/Resort_Hotel_MERN_Project"
      }
    ],
    [
      {
        img: img,
        pageTitle: "Luxurious Rooms",
        pageDescription:
          "A hotel reservation project made for the learning purposes",
        technologyTitle: "Technologies Used",
        technologyDescription: "React, Redux, Bootstrap bla bla bla bla bla",
        pageURL: "https://best-beach-resort-hotel.netlify.com/",
        codeURL: "https://github.com/BrManga/Resort_Hotel_MERN_Project"
      },
      {
        img: img1,
        pageTitle: "Zalando",
        pageDescription:
          "An e-commerce project not done by me, An e-commerce project not done by me",
        technologyTitle: "Technologies Used",
        technologyDescription:
          "React, Redux, Bootstrap bla bla bla bla bla, React, Redux, Bootstrap bla bla bla bla bla",
        pageURL: "https://best-beach-resort-hotel.netlify.com/",
        codeURL: "https://github.com/BrManga/Resort_Hotel_MERN_Project"
      }
    ]
  ];
  const projects = state.map(project => (
    <>
      <ProjectLeft {...project[0]} /> <ProjectRight {...project[1]} />
    </>
  ));
  return <Wrap className="container">{projects}</Wrap>;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  animation: fadein 4s;
  animation-fill-mode: forwards;
  margin-top: 5rem;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Projects;
