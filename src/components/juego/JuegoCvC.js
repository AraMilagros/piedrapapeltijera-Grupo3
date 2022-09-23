import React, { useState } from "react";
import Opcion from "./Opcion";
// import "./App.css";

let scorePlayer1 = 0;
let scorePlayer2 = 0;

function JuegoCvC() {
  const [eleccionJugador, setEleccionJugador] = useState("");
  const [eleccionMaquina, setEleccionMaquina] = useState("");
  const opciones = [
    {
      eleccion: "piedra",
      derrota: "tijera",
    },
    {
      eleccion: "papel",
      derrota: "piedra",
    },
    {
      eleccion: "tijera",
      derrota: "papel",
    },
  ];

  // const elegirOpcion = (event) => {
  //   const jugador = opciones.find(
  //     (e) => e.eleccion === event.target.textContent
  //   );
  //   setEleccionJugador(jugador);
  //   eleccionRival();
  // };
  const iniciarJuego = (event) => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionJugador(eleccion);
    eleccionRival();
  };
  const reiniciarJuego = (event) => {
    setEleccionJugador("none");
    setEleccionMaquina("none");
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
  const eleccionRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionMaquina(eleccion);
  };
  return (
    <div className="App">
      <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}/>
      <main>
        <section>
          <div className="jugador">Jugador 1</div>
          <div className="eleccion">
            <ImgEleccionJugador jugador={eleccionJugador}/>
          </div>
        </section>
        <section>
          <div className="jugador2">Jugador 2</div>
          <div className="eleccion">
            <ImgEleccionMaquina maquina={eleccionMaquina}/>
          </div>
        </section>
      </main>
        <Opcion jugar={iniciarJuego} reiniciar={reiniciarJuego}/>
      {/* <div className="opciones">
        {opciones.map((e,i) => (
          <Opcion key={i} elegir={elegirOpcion} valor={e} />
        ))}
      </div>
      <button onClick={reiniciarJuego}>Reiniciar</button> */}
    </div>
  );
}
export default JuegoCvC;

const ImgEleccionJugador = (props) => {
  let resultadoFinal;

  if (props.jugador.eleccion === "piedra") {
    resultadoFinal = "./img/piedra.png";
  } else if (
    props.jugador.eleccion === "papel") {
    resultadoFinal = "./img/papel.png";
  } else if (
    props.jugador.eleccion === "tijera") {
    resultadoFinal = "./img/tijera.png";
  }else{
    resultadoFinal = "none"
  }

  return (
    <img src={[resultadoFinal]} alt="ImagenInicial"/>
  );
};

const ImgEleccionMaquina = (props) => {
  let resultadoFinal;

  if (props.maquina.eleccion === "piedra") {
    resultadoFinal = "./img/piedra.png";
  } else if (
    props.maquina.eleccion === "papel") {
    resultadoFinal = "./img/papel.png";
  } else if (
    props.maquina.eleccion === "tijera") {
    resultadoFinal = "./img/tijera.png";
  }else{
    resultadoFinal = "none";
  }

  return (
    <img src={[resultadoFinal]} alt="ImagenInicial"/>
  );
};
const Resultado = (props) => {
  let resultadoFinal;

  if (props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion
  ) {
    scorePlayer1 = scorePlayer1+1;
    resultadoFinal = <p>Ganador: Jugador 1</p>;
  } else if (
    props.maquina.derrota === props.jugador.eleccion &&
    props.jugador.eleccion
  ) {
     scorePlayer2 = scorePlayer2+1;
    resultadoFinal = <p>Ganador: Jugador 2</p>;
  } else if (
    props.jugador.eleccion === props.maquina.eleccion &&
    props.jugador.eleccion
  ) {
    resultadoFinal = <p>Empate</p>;
  }else{
    resultadoFinal = <p> </p>
  }

  return (
    <>
        <h1>{resultadoFinal}</h1>
        <p>Puntaje Jugador 1: {scorePlayer1/2}</p>
        <p>Puntaje Jugador 2: {scorePlayer2/2}</p>
    </>
  );
};
