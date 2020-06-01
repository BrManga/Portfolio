import React from "react";
import img from "../../assets/Projects/heinsberg.png";
import img1 from "../../assets/Projects/weatherapp.png";
import img2 from "../../assets/Projects/toyshop.png";
import img3 from "../../assets/Projects/readinglist1.png";
import img4 from "../../assets/Projects/foreSight.png";
import img5 from "../../assets/Projects/devsymbols.png";

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
          "HTML, CSS, JS, React, Redux, Firebase, React-Stripe, Styled-Components",
        pageURL: "https://toyshop.netlify.com/",
        codeURL: "https://github.com/BrManga/Toy-Shop"
      },
      {
        img: img,
        pageTitle: "Heinsberg",
        pageDescription:
          "A guide for Heinsberg visitors showing what they can do in the city.",
        technologyTitle: "Technologies Used",
        technologyDescription: "HTML, SCSS, JS, React, Mapbox-gl",
        pageURL: "https://heinsberg.netlify.com/",
        codeURL: "https://github.com/BrManga/Stadt_Heinsberg"
      },
      {
        img: img4,
        pageTitle: "foreSight Blog",
        pageDescription: "A blog page designed to share articles with readers.",
        technologyTitle: "Technologies Used",
        technologyDescription: "HTML, SCSS, JS, React, Redux, React-Bootstrap",
        pageURL: "https://foresight.netlify.com/",
        codeURL: "https://github.com/BrManga/myBlog"
      },
      {
        img: img5,
        pageTitle: "Was ist das?",
        pageDescription:
          "It is designed to show the programmers the translation of symbols used in programming to other languages. You can see page in different languages.",
        technologyTitle: "Technologies Used",
        technologyDescription: "HTML, SCSS, JS, React, React-Bootstrap",
        pageURL: "https://devsymbols.netlify.com/",
        codeURL: "https://github.com/BrManga/devSymbol"
      },
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
          "HTML, CSS, JS, React, Context, Hooks (useReducer, useEffect)",
        pageURL: "https://react-reading-list.netlify.com/",
        codeURL: "https://github.com/BrManga/Reading_list"
      }
    ]
  ];
  const projects = state.map(project => (
    <>
      <ProjectLeft key={1} {...project[0]} />
      <ProjectRight key={2} {...project[1]} />
      <ProjectLeft key={3} {...project[2]} />
      <ProjectRight key={4} {...project[3]} />
      <ProjectLeft key={5} {...project[4]} />
      <ProjectRight key={6} {...project[5]} />
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
