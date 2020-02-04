import React from "react";
import img from "../../assets/Projects/resorthotel.png";
import img1 from "../../assets/Projects/weatherapp.png";
import img2 from "../../assets/Projects/toyshop.png";
import img3 from "../../assets/Projects/readinglist1.png";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import "./projects.style.scss";

function Projects() {
  const state = [
    [
      {
        img: img2,
        pageTitle: "My ToyShop",
        pageDescription:
          "An E-commerce website built with React, includes email and Google signIn/signOut and payment features.",
        technologyTitle: "Technologies Used",
        technologyDescription:
          "HTML, CSS, React, Redux, Firebase, React-Stripe, Styled-Components",
        pageURL: "https://toyshop.netlify.com/",
        codeURL: "https://github.com/BrManga/Toy-Shop",
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
        img: img1,
        pageTitle: "Weather App",
        pageDescription:
          "Weather app is using Openweathermap API to bring users the current weather and time in targeted city",
        technologyTitle: "Technologies Used",
        technologyDescription: "HTML, CSS, JS, Fetch",
        pageURL: "https://brave-wiles-6d83c2.netlify.com/",
        codeURL: "https://github.com/BrManga/WeatherApp"
      },
      {
        img: img3,
        pageTitle: "Reading List",
        pageDescription:
          "A reading list keeps your books information in your computer and waits for you to read them :)",
        technologyTitle: "Technologies Used",
        technologyDescription:
          "HTML, CSS, React, Context, Hooks (useReducer, useEffect)",
        pageURL: "https://react-reading-list.netlify.com/",
        codeURL: "https://github.com/BrManga/Reading_list"
      }
    ]
  ];
  const projects = state.map(project => (
    <>
      <ProjectLeft key={1} {...project[0]} /> <ProjectRight key={2} {...project[1]} />
    </>
  ));
  return (
    <>
      <div className="container wrapProjects">
        <p className="projectsTitle">Some of my Projects</p>
        {projects}
      </div>
    </>
  );
}

export default Projects;
