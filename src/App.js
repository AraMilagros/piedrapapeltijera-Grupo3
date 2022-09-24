import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import JuegoCvC from './components/juego/JuegoCvC';
import Desarrolladores from './pages/Desarrolladores';
import Home from './pages/Home';
import '../src/assets/css/Home.css'


function App() {
    return (
        <div className="container2">
            {/* Este componente muestra la vista de Home
        Dentro del componente Principal se llama a su vez los componentes de Header y los 
        componentes segun lo que eliga el usuario. Por ejemplo:
            Por defecto se da la vista del home, por lo que se llama al componente Home
            Ahora, si el user quiere jugar, se llamara al componente que mueste el juego
            o si quiere ver quiénes desarrollaron el juego, se llamara el componente respectivo
            
            Esto se logra con router*/}
            {/* Este seria el nav */}
            <Header/>
            <Router>
                <Routes>
                    {/* Aqui se llama el componente que muestra el inicio del juego..la portada */}
                    <Route path="/" element={<Home/>}></Route>
                    {/* Aqui iria el componente que muestra el juego
                      #se debe aumentar el atributo de element={<componente/>} */}
                    <Route path="/jugar" element={<JuegoCvC></JuegoCvC>}></Route>
                    {/* Y aqui iria el componente que muestra las cards de los desarrolladores
                        #se debe aumentar el atributo de element={<componente/>} */}
                    <Route path="/info" element={<Desarrolladores/>}></Route>
                </Routes>
            </Router>
            
        </div>



    );

}

export default App;