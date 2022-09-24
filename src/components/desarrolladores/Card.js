import React from "react";
import PropTypes from "prop-types";

import "../../assets/css/card.css";

function Card({imageSource, title, presentation, url}) {
  return (
    <div className="card text-center  animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="wallpaper" className="card-img-top"/>
      </div>
      <div className="card-body text-ligth">
        <h4 className="titulo">{title}</h4>
        <p className="presentacion ">{presentation}</p>
        <a href={url ? url : "#!"} target="_blank" className="btn btn-outline-secondary border-0" rel="noreferrer">Ir a GitHub</a>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  presentation: PropTypes.string
};

export default Card;
