import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
// import MainJuego from '../components/MainJuego';
// import Desarrolladores from '../components/Desarrolladores';

export default function Principal() {
    return (
        <>
            {/* Este seria el nav */}
            <Header />
            <BrowserRouter>
                <Routes>
                    {/* Aqui se llama el componente que muestra el inicio del juego..la portada */}
                    <Route path="/" element={<Home />}></Route>
                    {/* Aqui iria el componente que muestra el juego
                      #se debe aumentar el atributo de element={<componente/>} */}
                    <Route path="jugar"></Route>
                    {/* Y aqui iria el componente que muestra las cards de los desarrolladores
                        #se debe aumentar el atributo de element={<componente/>} */}
                    <Route path="info"></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}