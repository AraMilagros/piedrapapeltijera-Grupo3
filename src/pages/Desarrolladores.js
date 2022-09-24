import React from "react";
import Card from "../components/desarrolladores/Card";

<<<<<<< HEAD
import image1 from "../assets/img/desarrolladores/image1.jpg";
=======
import "../assets/css/card.css";

import image1 from "./image-Desarrolladores/image1.jpg";
import image2 from "./image-Desarrolladores/image2.jpg";
import image3 from "./image-Desarrolladores/image3.jpg";
import image4 from "./image-Desarrolladores/image4.jpg";
import image5 from "./image-Desarrolladores/image5.jpg";
import image6 from "./image-Desarrolladores/image6.jpg";
>>>>>>> main

import '../assets/css/card.css';

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
    title: "Lucas Alberto Rafael Martinez LLosco",
    image: image2,
    presentation: 'Me gusta el basquet y el gym, un tipo normal en la vida.',
    url: "https://github.com/LucasGGz",
  },
  {
    id: 3,
    title: "Jose luis Marquez",
    image: image3,
    presentation: '"De todos los amigos que he tenido tu eres el unico"'+'        _Bender Bending Rodríguez_',
    url: "https://github.com/Tetricslaughter",
    },
  {
    id: 4,
    title: "Araceli Palenque",
    image: image4,
    presentation: 'Frase de vida :"He aprendido tanto de mis errores que cada vez me salen mejor :D "',
    url: "https://github.com/AraMilagros",
  },
  {
    id: 5,
    title: "Bueno, Rafael Ismael Pérez Fascio",
    image: image5,
    presentation: 'Demasiado ocupado para dar una descripción',
    url: "https://github.com/RafaelFascio",
  },
  {
    id: 6,
    title: "Ariel Reyes",
    image: image6,
    presentation: 'Pio Pio :V',
    url: "https://github.com/Areyss",
  }
];

function Desarrolladores() {
  return (
    <>
      <div className="container d-flex align-items-center h-100">
        <div className="row">
          {desarrollador.map(({title, image, presentation, url, id}) => (<div className="col-md-4" key={id}><Card imageSource={image} title={title} presentation={presentation} url={url}/></div>))}
        </div>
        <div className="row">

        </div>
      </div>
    </>
  );
}

export default Desarrolladores;