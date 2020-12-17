import React from "react";
import "./Textcontact.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PhoneForwardedOutlinedIcon from "@material-ui/icons/PhoneForwardedOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Textcontact() {
  return (
    <div className="texto">
      <div className="texto-derecha">
        <h2 className="titulo">
          Contáctenos vía email, teléfono o viniendo a nuestras oficinas.
        </h2>
        <p>
          <MailOutlineIcon /> info@airhitect.com
        </p>
        <p>
          <PhoneForwardedOutlinedIcon /> +94 11 2494-1212
        </p>
        <p>
          <HomeOutlinedIcon /> Av. Paseo de la Reforma 687-755
          <p>Lomas de Chapultepec, Ciudad De Mexico</p>
        </p>
      </div>
      <div className="texto-izquierda">
        <div className="texto-abajo">
          <div className="icons">
            <a href="https://www.linkedin.com/">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
          </div>
          <div className="texto-bajo-iconos">
            <h3>¡Estamos Contratando!</h3>
            <p>
              Estamos buscando nuevos talentos para unir a nuestro equipo de
              trabajo. Si crees que tu perfil es el indicado para trabajar en
              AIRhitect, mándanos tu CV junto con tu portafolio. No olvides
              también escribirnos un poco sobre ti.
            </p>
            <span>job@airhitect.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textcontact;
