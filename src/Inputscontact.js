import React from "react";
import "./Inputscontact.css";

function Inputscontact() {
  return (
    <div className="contenedor-inputs">
      <form action=".">
        <p>
          <input type="text" placeholder="Nombre" className="inputes" />
        </p>
        <p>
          <input type="text" placeholder="E-mail" className="inputes" />
        </p>
        <p>
          <input type="text" placeholder="Asunto" className="inputes" />
        </p>
        <p>
          <input type="text" placeholder="Mensaje" className="mensaje" />
        </p>
      </form>
      <button className="envio">Enviar Formulario</button>
    </div>
  );
}

export default Inputscontact;
