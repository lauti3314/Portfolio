import React from "react";
import img from "./img/yo.jpeg";
import style from "./User.module.css";
import cv from "./cv/CV.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = () => {
  return (
    <div className={style.userContainer}>
      <div>
        <div className={style.flexContainer}>
          <div className={style.descriptionContainer}>
            <img src={img} alt="" className={style.img} />
            <div>
              <p className={style.description}>
                {" "}
                FullStack Developer | SQL | JavaScript | React.js | Node.js{" "}
              </p>
              <ul className={style.listContainer}>
                <li className={style.list}> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Mendoza, Argentina</li>
               <div className={style.listMove}>
                <li className={style.list}>LinkedIn</li>
                <li className={style.list}>Git Hub</li>
                </div>
              </ul>
              <div className={style.buttonContainer}>
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV.pdf"
                >
                  <button className={style.button}> Descargar CV <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
                </a>
                <button
                  className={style.button}
                  onClick={() => window.open("mailto:lautaro3314@hotmail.com")}
                >
                  Contactame
                </button>
              </div>
            </div>
          </div>

          <div className={style.all}>
            <h1 className={style.title}> Sobre mí </h1>
            <div className={style.card}>
              <p className={style.text}>
                {" "}
                Me llamo Lautaro Tejada, actualmente tengo 20 años y me encanta
                la tecnología, por lo que me ha llevado a realizar distintos
                cursos y estudios de ella para poder afianzar mis conocimientos
                y conocer como funciona. Soy desarrollador web full stack,
                destacándome en el sector del Back End y base de datos, con un
                buen manejo de ingles. Tengo deseo de seguir filtrándome en la
                tecnología y poder aprender nuevas implementaciones para poder
                aplicarlas en diversos proyectos y generar grandes cambios.
              </p>
            </div>
            <div>
              <h1 className={style.title}>Mis Habilidades</h1>
              <div className={style.card}>
                <p className={style.text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt molestias deleniti ipsum culpa iste debitis! Vel
                  atque pariatur itaque dolor exercitationem. At quas
                  exercitationem voluptas! Asperiores repellendus sed ratione
                  at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
