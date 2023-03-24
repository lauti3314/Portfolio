import React from "react";
import style from "./Tecnologies.module.css";

const Tecnologies = () => {
  const techStack = [
    {
      name: "React",
      src: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
      url: "https://reactjs.org/",
    },
    {
      name: "CSS3",
      src: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
      url: "https://www.w3schools.com/css/",
    },
    {
      name: "HTML5",
      src: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
      url: "https://en.wikipedia.org/wiki/HTML5",
    },
    {
      name: "JavaScript",
      src: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
      url: "https://www.javascript.com/",
    },
    {
      name: "Figma",
      src: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg",
      url: "https://www.figma.com/",
    },
    {
      name: "Git",
      src: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
      url: "https://github.com/",
    },
    {
      name: "Node.js",
      src: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
      url: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      src: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
      url: "https://expressjs.com/",
    },
    {
      name: "PostgreSQL",
      src: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg",
      url: "https://www.postgresql.org/",
    },
  ];

  const renderTechStack = techStack.map((tech, index) => (
    <a href={tech.url} target="_blank" key={index}>
      <img
        className={`${style.imgIcon} imgTech`}
        src={tech.src}
        alt={tech.name}
      />
    </a>
  ));
  return (
    <div>
      <h1 className={style.title}>Mis Tecnologias</h1>
      <div>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          cupiditate pariatur minima blanditiis ea, nulla obcaecati incidunt!
          Velit at quo quia eum ullam officiis quas cum. Dolor tempora minima
          delectus.
        </p>
      </div>
      <div className={style.flexContainer}>
        <div className={style.gridContainer}>{renderTechStack}</div>
      </div>
    </div>
  );
};

export default Tecnologies;
