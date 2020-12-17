import React from "react";
import "./About.css";
import Headerprincipal from "./Headerprincipal";

function About() {
  return (
    <div className="about" id="about">
      <Headerprincipal />
      <div className="contenedor">
        <hr className="linea" />
        <h2 className="textoprincipal">
          Somos el estudio de arquitectura más vanguardista de la ciudad de
          México DF.{" "}
          <strong className="bold">
            Aqui encontraran diseño y técnicas constructivas de calidad
          </strong>{" "}
          de la mano de los mejores profesionales. Todo por un presupuesto justo
          y acorde a sus necesidades.
        </h2>
        <hr className="linea2" />
      </div>
      <article className="articulo">
        <p className="texto-columnas">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fugiat explicabo vitae tempore porro eius odio autem, libero iste
          aspernatur saepe, labore aperiam sint! Alias quisquam aspernatur
          suscipit labore quasi. Maiores, esse vel assumenda ipsum eos incidunt
          officiis veritatis, ratione officia nobis, fuga minima vitae. Ipsam
          facere suscipit nisi eum! Asperiores neque, doloremque consequuntur
          tempora deleniti dolorem perspiciatis nostrum porroa kajsdhka asdasd.
          hola que tal, diushgba.
        </p>
      </article>
    </div>
  );
}

export default About;
