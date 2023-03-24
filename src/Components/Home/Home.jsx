import React from "react";
import Nav from "../Nav/Nav";
import User from "../User/User";
import Tecnologies from "../Tecnologies/Tecnologies";
import Proyects from "../Proyects/Proyects";

const Home = () => {
   return <div>

      <div> <Nav /> </div>
      <div> <User /> </div>
      <div> <Tecnologies /> </div>
      <div> <Proyects /> </div>

   </div>
}

export default Home;