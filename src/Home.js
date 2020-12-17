import React from "react";
import "./Home.css";
import Headerprincipal from "./Headerprincipal";

function Home() {
  return (
    <div className="home" id="home">
      <Headerprincipal />
      <h2 className="titulo-conlinea">Dedicados al futuro</h2>
      <p className="parrafo">Siempre mirando adelante</p>
    </div>
  );
}

export default Home;
