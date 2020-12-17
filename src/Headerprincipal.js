import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SimpleMenu from "./Menu";
function Headerprincipal() {
  return (
    <div className="header">
      <SimpleMenu className="menu" />

      <div className="img"></div>
      <a href="#contact" className="botonart">
        <button className="boton">Contact</button>
      </a>
    </div>
  );
}

export default Headerprincipal;
