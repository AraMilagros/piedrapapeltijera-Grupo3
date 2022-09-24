import React, { useState } from "react";
import Opcion from "./Opcion";
// import "./JuegoCvC.css";

//Se declaran las variables que guardan los puntajes de los jugadores
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function JuegoCvC() {
  //Se declaran las variables que guardan las elecciones de cada jugador, ambas son useState
  //en el 1er elemento "eleccionJugador" se guarda el estado, y el 2do "setEleccionJugador" es la funcion que cambia el estado. en useState "" marca el estado inicial
  const [eleccionJugador, setEleccionJugador] = useState("");
  const [eleccionJugador2, setEleccionJugador2] = useState("");
  //Creo un array de objetos con las opciones a elegir y el elemento al cúal derrota dicha eleccion
  //esto sirve para determinar cúal jugador ha ganado
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

  //La función se usa para el caso PvP
  //a esta función se le pasa el evento "event" para que se ejecute al hacer click
  // const elegirOpcion = (event) => {
  //   const jugador = opciones.find((e) => e.eleccion === event.target.textContent);//Esto hace que el primer elemento del array cuyo parámetro "elección" sea igual a "textContent" lo devuelve y lo asigna a la variable const Jugador(.find busca en el array)
  //   setEleccionJugador(jugador);
  //   eleccionRival();
  // };
  //Este método le da un valor aleatorio a la elección del jugador 1 y luego llama al Función elecciónRival() <.floor devuelve el mayor entero menor o igual que su argumento numerico "redondea el numero">
  //se usa para el caso de CvC
  const iniciarJuego = (event) => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];//.length devuel la longitud del array. esto seriá uno mas a su indice mas alto
    setEleccionJugador(eleccion);
    eleccionRival();
  };
  //reinicia las elecciones de los jugadores y los puntajes
  const reiniciarJuego = (event) => {
    setEleccionJugador("none");
    setEleccionJugador2("none");
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
  //Este método le da un valor aleatorio a la elección del jugador 2
  const eleccionRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionJugador2(eleccion);
  };
  return (
    <div className="JuegoCvC">
      <Resultado jugador={eleccionJugador} jugador2={eleccionJugador2}/>
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
            <ImgEleccionJugador2 jugador2={eleccionJugador2}/>
          </div>
        </section>
      </main>
      {/**ESTO SE USA PARA EL CASO DE CvC */}
        <Opcion jugar={iniciarJuego} reiniciar={reiniciarJuego}/>
        {/**ESTO SE USA PARA EL CASO DE PvP */}
      {/* <div className="opciones">
        {opciones.map((e,i) => (//e:es el elemento. i:el índice
          <Opcion key={i} elegir={elegirOpcion} valor={e} />
        ))}
      </div>
      <button onClick={reiniciarJuego}>Reiniciar</button> */}
    </div>
  );
}
export default JuegoCvC;

//Esta función cambia las imagenes que se mostrarán según la elección del jugador 1
const ImgEleccionJugador = (props) => {
  let imagen;//sirve para guardar la imagen que se mostrará

  if (props.jugador.eleccion === "piedra") {
    imagen = "../img/rock.png";
  } else if (
    props.jugador.eleccion === "papel") {
    imagen = "../img/paper.png";
  } else if (
    props.jugador.eleccion === "tijera") {
    imagen = "../img/scissors.png";
  }else{
    imagen = "none"
  }
//muestra la imagen
  return (
    <img src={[imagen]} alt="PPT.gif"/>
  );
};
//Esta función hace lo mismo que la anterior pero para el jugador 2. Mi idea era usar el método anterior y enviarle como props a la elección del jugador2 pero daba errores y tuve que hacer otra función.
const ImgEleccionJugador2 = (props) => {
  let imagen;

  if (props.jugador2.eleccion === "piedra") {
    imagen = "../img/rock.png";
  } else if (
    props.jugador2.eleccion === "papel") {
    imagen = "../img/paper.png";
  } else if (
    props.jugador2.eleccion === "tijera") {
    imagen = "../img/scissors.png";
  }else{
    imagen = "none";
  }

  return (
    <img src={[imagen]} alt="PPT.gif"/>
  );
};
//Esta función sirve para evaluar quién ganó y aumentar el puntaje del ganador.
const Resultado = (props) => {//recibe como props la elección del jugador 1 y del jugador 2. Ademas recibe el elemento al que derrota dichas elecciones
  let resultadoFinal;//sirve para guardar el mensaje de quien ganó
  if (props.jugador.derrota === props.jugador2.eleccion && props.jugador.eleccion//evalúa que el elemento al que derrota, la eleccion del jugador 1, sea igual a la elección del jugador2. lo que sigue después de && es para verificar que la haya una elección, es decir que no este vacío. Lo mismo en los demás condicionales
  ) {
    scorePlayer1 = scorePlayer1+1;//aumenta el puntaje del Jugador 1
    resultadoFinal = <p>Ganador: Jugador 1</p>;// se guarda en la variable resultadoFinal el mensaje
  } else if (
    props.jugador2.derrota === props.jugador.eleccion &&
    props.jugador.eleccion
  ) {
     scorePlayer2 = scorePlayer2+1;//aumenta el puntaje del Jugador 2
    resultadoFinal = <p>Ganador: Jugador 2</p>;
  } else if (
    props.jugador.eleccion === props.jugador2.eleccion &&
    props.jugador.eleccion
  ) {
    resultadoFinal = <p>Empate</p>;
  }else{   //esto sirve para que, al darle en reiniciar, muestre un mensaje vacío.
    resultadoFinal = <p> </p>
  }
// devuelve o muestra el mensaje y los puntajes de cada jugador
  return (
    <>
        <h1>{resultadoFinal}</h1>
        <p>Puntaje Jugador 1: {scorePlayer1/2}</p>
        <p>Puntaje Jugador 2: {scorePlayer2/2}</p>
    </>
  );
};
