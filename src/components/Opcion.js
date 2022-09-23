import React from "react";
const Opcion = (props) => {
//   return (
//     <>
//     <div>
//     <button onClick={props.elegir}>{props.valor.eleccion}</button>
//     </div>
//     </>
//   );
    return(
        <div>
            <button onClick={props.jugar}>Jugar</button>
            <button onClick={props.reiniciar}>Reiniciar</button>
        </div>
    );
};

export default Opcion;