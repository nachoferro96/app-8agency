import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerprincipal from "./Headerprincipal";
import "./Project2.css";

const items = [
  {
    src: "https://i.ibb.co/c1SGxCZ/parte2.jpg",
    altText: "Barrio Privado Santa Julia",
    caption: "Un barrio que combina diseño con infraestructura y funcionalidad",
  },
  {
    src: "https://i.ibb.co/RS2JRHD/Arqui3.png",
    altText: "Torre Terrazas",
    caption: "Edificio multifamiliar vanguardista y acogedor",
  },
  {
    src: "https://i.ibb.co/mhChBd7/Arqui1-1.png",
    altText: "Bloques Marinos",
    caption: "Viviendas unifamiliares al borde y sobre nuestro mar ",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        id="proyecto"
      >
        <img
          src={item.src}
          alt={item.altText}
          width="100%"
          height="700px"
          className="hola"
        />
        <div className="contenedor-descripcion">
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.altText}
            className="descripcion"
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <Headerprincipal className="header" />
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="carrusel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default Example;
