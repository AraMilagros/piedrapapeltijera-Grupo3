import MainJuego from "../components/MainJuego"

export default function Juego(){
    return(
        //Acá puede ir el nav u otro componente que quieran añadir
        //Se puede agregar un archivo json para pasarles las imagenes
        <MainJuego img={["./img/rock.png","./img/paper.png","./img/scissors.png","./img/none.png"]}/>
    );
}