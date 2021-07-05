import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { useState, useEffect } from "react";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { DatosAmigosContext } from "./contexts/DatosAmigosContext";
function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const urlAPI = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const llamadaListaPokemon = async (urlAPI) => {
    const response = await fetch(urlAPI);
    const pokemonsters = await response.json();
    setAllPokemon(pokemonsters.results);
  };

  useEffect(() => {
    llamadaListaPokemon(urlAPI);
  }, []);

  return (
    <>
      <Router>
        <div className="container">
          <DatosAmigosContext.Provider
            value={{
              urlAPI,
              allPokemon,
            }}
          >
            <Cabecera />
            <Switch>
              <Route path="/" exact>
                <Redirect to="/principal" />
              </Route>
              <Route path="/principal" exact>
                <PaginaPrincipal />
              </Route>
            </Switch>
          </DatosAmigosContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
