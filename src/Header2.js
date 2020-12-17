import React from "react";
import "./Header2.css";

import SimpleMenu from "./Menu";

function Header2() {
  return (
    <div className="header">
      <SimpleMenu className="menu" />

      <div className="img2"></div>
      <a href="#contact" className="botonart">
        <button className="boton">Contact</button>
      </a>
    </div>
  );
}

export default Header2;
