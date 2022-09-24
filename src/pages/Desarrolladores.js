import React from "react";
import Card from "./Card";

import image1 from "./image-Desarrolladores/image1.jpg";

import '../assets/css/card.css'

const desarrollador = [
  {
    id: 1,
    title: "Alex Colpari",
    image: image1,
    presentation: 'Hola, me llamo Alex, me gusta jugar Minecraft y me sobran las ganas de morirme uwu.',
    url: "https://github.com/AlexUwU",
  },
  {
    id: 2,
    title: "nose",
    image: image1,
    presentation: 'Holiwi',
    url: "#",
  },
  {
    id: 3,
    title: "nose2",
    image: image1,
    presentation: 'Holiwi',
    url: "#",
  },
  {
    id: 4,
    title: "nose3",
    image: image1,
    presentation: 'Holiwi',
    url: "#",
  },
  {
    id: 5,
    title: "nose4",
    image: image1,
    presentation: 'Holiwi',
    url: "#",
  },
  {
    id: 6,
    title: "nose5",
    image: image1,
    presentation: 'Holiwi',
    url: "#",
  }
];

function Desarrolladores() {
  return (
    <>
      <div className="container d-flex align-items-center h-100">
        <div className="row">
          {desarrollador.map(({title, image, presentation, url, id}) => (<div className="col-md-4" key={id}><Card imageSource={image} title={title} presentation={presentation} url={url}/></div>))}
        </div>
      </div>
    </>
  );
}

export default Desarrolladores;