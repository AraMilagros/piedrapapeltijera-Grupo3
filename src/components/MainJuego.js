import {useState} from "react";
export default function(props){
    const [numRandom,setNumRandom]= useState(null);// numero ramdom de la Pc
    const [num,setNum]=useState(null);// numero que elije el usuario
    const [mensaje,setMensaje]=useState("Esperando elección...");
    const [puntajeUser,setPuntajeUser]=useState(0);//inicializando el puntaje del usuario a 0
    const [puntajePc,setPuntajepc]=useState(0);//inicializando el puntaje de la PC a 0
    const [imagenUser,setImagenUser]=useState(3);//inicializando la img de none por defecto
    const [imagenPc,setImagenPc]=useState(3);

    const generarNumRandom=()=>{
        setNumRandom(Math.floor(Math.random()*3));//Math.floor() redondea hacia abajo un num entero
    }
    
    const jugar = () => {
        cambiarImagen();
        switch (num) {//esto representa la opcion que el user eligio
            
            case 0:// piedra
                switch (numRandom) {//Esto representa la opcion que se generó para la PC
                    case 0://Cambia el msj dependiendo de cada situacion
                        setMensaje("Empate");
                        break;
                    case 1:
                        setMensaje("Perdiste");
                        setPuntajepc(puntajePc+1);
                        break;
                    case 2:
                        setMensaje("Ganaste");
                        setPuntajeUser(puntajeUser+1);
                        break;
                }
                break;
            case 1://papel
                switch (numRandom) {
                    case 0:
                        setMensaje("Ganaste");
                        setPuntajeUser(puntajeUser+1);
                        break;
                    case 1:
                        setMensaje("Empate");
                        break;
                    case 2:
                        setMensaje("Perdiste");
                        setPuntajepc(puntajePc+1);
                        break;
                }
                break;
            case 2://tijera
                switch (numRandom) {
                    case 0:
                        setMensaje("Perdiste");
                        setPuntajepc(puntajePc+1);
                        break;
                    case 1:
                        setMensaje("Ganaste");
                        setPuntajeUser(puntajeUser+1);
                        break;
                    case 2:
                        setMensaje("Empate");
                        break;
                }
                break;
            default:
                setMensaje("Esperando elección...");
                break;
        }
        
    }
    const cambiarImagen=()=>{// función que cambia las imagenes despues de apretar Jugar
        setImagenUser(num);//antes de jugar comienza con una img none tant para user como la PC
        setImagenPc(numRandom);
    }
    return(
        <>
            <div className="main-juego">
                <div className="titulo-juego">
                    <h1>Piedra, Papel o Tijera</h1>
                </div>
                <div className="menu-juego">
                    <div className="menu-juego-up">
                        <div className="user-pc">
                            <h2>Jugador</h2>
                            <img src={props.img[imagenUser]} alt="none" width={200} />
                        </div>

                        <div className="marcador">
                            <h2>marcador</h2>
                            <h3>{puntajeUser}:{puntajePc}</h3>
                        </div>
                        <div className="user-pc">
                            <h2>Computadora</h2>
                            <img src={props.img[imagenPc]} alt="none" width={200} />
                        </div>

                    </div>
                    <h1>{mensaje}</h1>

                    <div className="botones-juego">
                        {/* cada button posee una img de piedra, papel y tijera, las cuales estan representadas
                            por los numeros 0 1 y 2 respectivamente
                            Cuando el evento onClick sea llamada se actualizara el setNum con la opcion que el user elija
                            a la vez que se llamara la funcion generarNumRandom para obtener la opcion por parte de la PC */}
                        <button onClick={() => { setNum(0), generarNumRandom() }}><img src={props.img[0]} alt="rock" width={100} /></button>
                        <button onClick={() => { setNum(1), generarNumRandom() }}><img src={props.img[1]} alt="paper" width={100} /></button>
                        <button onClick={() => { setNum(2), generarNumRandom() }}><img src={props.img[2]} alt="scissors" width={100} /></button>
                    </div>

                    <button onClick={jugar}>Jugar</button>
                </div>
            </div>
            
            
        </>
    );
}