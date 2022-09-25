// import {Routes, Route, Link  } from "react-router-dom";
import JuegoCvC from "../components/juego/JuegoCvC";
import JuegoPvC from "../components/juego/JuegoPvC";
import rock from "../assets/img/rock.png";
import paper from "../assets/img/paper.png";
import scissors from "../assets/img/scissors.png";
import none from "../assets/img/none.png";
import Header from "../components/Header";
import JuegoPvP from "../components/juego/JuegoPvP";

export default function Juego(){
    return(
        <>
            <Header/>
            <nav className="m-2">
            {/* <ul className="nav nav-tabs" role="tablist ">
                <li className="nav-item" role="presentation ">
                    <a href="/jugar/pvc" className="nav-link active" role="button">Juego PvC</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="/jugar/cvc" className="nav-link  " role="button">Juego CvC</a>
                </li>
            </ul> */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="cvc-tab" data-bs-toggle="tab" data-bs-target="#cvc-tab-pane" type="button" role="tab" aria-controls="cvc-tab-pane" aria-selected="true">PC vs PC</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pvc-tab" data-bs-toggle="tab" data-bs-target="#pvc-tab-pane" type="button" role="tab" aria-controls="pvc-tab-pane" aria-selected="false">Player vs PC</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pvp-tab" data-bs-toggle="tab" data-bs-target="#pvp-tab-pane" type="button" role="tab" aria-controls="pvp-tab-pane" aria-selected="false">Player vs Player</button>
                    </li>

                </ul>
                {/* <h1>Piedra, Papel o Tijeras</h1> */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="cvc-tab-pane" role="tabpanel" aria-labelledby="cvc-tab" tabIndex="0"><JuegoCvC /></div>
                    <div className="tab-pane fade" id="pvc-tab-pane" role="tabpanel" aria-labelledby="pvc-tab" tabIndex="0"><JuegoPvC img={[rock, paper, scissors, none]} /></div>
                    <div className="tab-pane fade" id="pvp-tab-pane" role="tabpanel" aria-labelledby="pvp-tab" tabIndex="0"><JuegoPvP img={[rock, paper, scissors, none]} /></div>
                    
                </div>
        </nav>
            {/* <Routes>
                <Route path="cvc" element={<JuegoCvC/>}/>
                <Route path="pvc" element={<JuegoPvC img={[rock,paper,scissors,none]}/>}/>
            </Routes> */}
             
        </>
    );
}