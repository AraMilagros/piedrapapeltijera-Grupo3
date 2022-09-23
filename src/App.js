import Principal from './pages/Principal';

function App() {
    return (
        <div class="container">
            {/* Este componente muestra la vista de Home
        Dentro del componente Principal se llama a su vez los componentes de Header y los 
        componentes segun lo que eliga el usuario. Por ejemplo:
            Por defecto se da la vista del home, por lo que se llama al componente Home
            Ahora, si el user quiere jugar, se llamara al componente que mueste el juego
            o si quiere ver quiénes desarrollaron el juego, se llamara el componente respectivo
            
            Esto se logra con router*/}
            <Principal/>
            
        </div>



    );

}

export default App;