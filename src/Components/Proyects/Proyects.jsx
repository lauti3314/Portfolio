import React from "react";
import ProyectoFinal from "./video/ProyectoFinal.mp4";
import style from "./Proyects.module.css";

const Proyects = () => {
  return (
    <div>
      <h1 className={style.title}>Mis Proyectos</h1>

      <h2 className={style.subtitle}>Proyecto Final</h2>
      <div className={style.flexContainer}>
        <div>
          <p className={style.text}>
            "En mi Proyecto Final del bootcamp SoyHenry, juntos a 7 compañeros,
            desarrollamos una E-commerce de hoteles utilizando React, Node.js,
            PostgreSQL y JavaScript. La aplicación permite a los usuarios hacer
            reservas de habitaciones y realizar pagos a través de MercadoPago,
            así como buscar hoteles por nombre, cantidad de estrellas y
            lenguajes. Además, los usuarios pueden obtener ayuda mediante un
            chatbot bilingüe. Por otro lado, el administrador tiene acceso a
            estadísticas sobre los hoteles más vendidos, los países más
            recurrentes y las reservas por mes. También puede modificar los
            datos de los hoteles y las habitaciones, así como habilitar u
            ocultar habitaciones según su disponibilidad."
          </p>
          <a
            href="https://www.youtube.com/watch?v=tfh-LRV5wKE"
            target="_blank"
            className={style.repo}
          >
            Link del video
          </a>
          <a
            href="https://github.com/lauti3314/Proyecto-Final"
            target="_blank"
            className={style.repo}
          >
            Repositorio
          </a>
        </div>
        <video
          className={style.video}
          src={ProyectoFinal}
          muted
          loop
          controls
        ></video>
      </div>
    </div>
  );
};

export default Proyects;
