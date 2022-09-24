import MainJuego from "../components/juego/MainJuego"

export default function Juego(){
    return(
        //Acá puede ir el nav u otro componente que quieran añadir
        // esta pagina se utilizara para añadir la opcion de jugar pvc o cvc
        <MainJuego img={["./img/rock.png","./img/paper.png","./img/scissors.png","./img/none.png"]}/>
    );
}