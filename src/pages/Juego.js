import {Routes, Route, Link  } from "react-router-dom";
import JuegoCvC from "../components/juego/JuegoCvC";
import JuegoPvC from "../components/juego/JuegoPvC";
import rock from "../assets/img/rock.png";
import paper from "../assets/img/paper.png";
import scissors from "../assets/img/scissors.png";
import none from "../assets/img/none.png";

export default function Juego(){
    return(
        
        // esta pagina se utilizara para añadir la opcion de jugar pvc o cvc
        // <JuegoPvC img={["./img/rock.png","./img/paper.png","./img/scissors.png","./img/none.png"]}/>
        // acá se va a añadir un header
        <>
            <div className="btn btn-info"><Link to='/jugar/pvc'>juegopvc</Link></div>  
            <div className="btn btn-info"><Link to='/jugar/cvc'>juegopvc</Link> </div>  
            <Routes>
                <Route path="cvc" element={<JuegoCvC/>}/>
                <Route path="pvc" element={<JuegoPvC img={[rock,paper,scissors,none]}/>}/>
            </Routes>
             
        </>
    );
}