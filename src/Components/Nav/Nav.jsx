import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className= {style.navStyle}>
      <ul className={style.navContainer}>
        <div className={style.flexContainer}>
        <NavLink to={"/"} className={style.aList} > 
          <li className={style.list}>Sobre mí</li>
        </NavLink>
        
         <li className={style.list}>Tecnologías</li>

         <li className={style.list}>Proyectos</li>
        <a
          href="https://github.com/lauti3314"
          target="_blank"
          className={style.aList}
        >
          <li className={style.list}>Git Hub</li>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/lautaro-tejada-733b47264/"
          target="_blank"
          className={style.aList}
        >
          {" "}
          <li className={style.list}>Linkedin</li>{" "}
        </a>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
