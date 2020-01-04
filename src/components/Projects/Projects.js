import React from "react";
import styled from "styled-components";
import { Col, Card, Button } from "react-bootstrap";
import img from "../../assets/Projects/resorthotel.png";
import img1 from "../../assets/Projects/zalando.png";

import Project from "./Project";

function Projects() {
  const state = [
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
  ];
  const projects = state.map(project => <Project {...project} />);
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
