import React from "react";

const Opcion = (props) => {
    //Este return se usa para el caso de Player vs Player
    //devuelve un div con 3 botones, son tres botones porque button recibe como props
    //el elemento del array con la elección y el objeto al que derrota, poniendose de nombre la elección
    //En button el evento onClick llama al método elegirOpcion, el cuál recibe como props
//   return (
//     <div>
//      <button onClick={props.elegir}>{props.valor.eleccion}</button>
//     </div>
//   );
    //Este retun se usa para el caso de Computadora vs Computadora
    //devuelve un div con 2 botones, el 1ro ejecuta el método IniciarJuego que recibe como parámetro
    //el 2do ejecuta el método reiniciarJuego que también recibe como parámetro
    return(
        <div>
            <button className="btn btn-danger" onClick={props.jugar}>Jugar</button>
            <button className="btn btn-info" onClick={props.reiniciar}>Reiniciar</button>
        </div>
    );
};

export default Opcion;