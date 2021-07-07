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
  const [urlAPI, setUrlAPI] = useState("");
  const [regionSelected, setRegionSelected] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const getUrlAPI = (region) => {
    setAllPokemon([]);
    switch (region) {
      case "1":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?limit=10" /* 151 */);
        break;
      case "2":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=151&limit=10" /* 100 */
        );
        break;
      case "3":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=251&limit=10" /* 135 */
        );
        break;
      case "4":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=386&limit=10" /* 107 */
        );
        break;
      case "5":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=493&limit=10" /* 156 */
        );
        break;
      case "6":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=649&limit=10" /* 72 */
        );
        break;
      case "7":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=721&limit=10" /* 88 */
        );
        break;
      case "8":
        setUrlAPI(
          "https://pokeapi.co/api/v2/pokemon?offset=809&limit=10" /* 89 */
        );
        break;
      default:
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?limit=10");
    }
  };

  useEffect(() => {
    const llamadaListaPokemon = async () => {
      getUrlAPI(regionSelected);
      const response = await fetch(urlAPI);
      const data = await response.json();
      setAllPokemon(data.results);
    };
    llamadaListaPokemon();
  }, [regionSelected, urlAPI]);

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
            <Cabecera
              regionSelected={regionSelected}
              setRegionSelected={setRegionSelected}
              setAllPokemon={setAllPokemon}
            />
            <Switch>
              <Route path="/" exact>
                <Redirect to="/principal" />
              </Route>
              <Route path="/principal" exact>
                <PaginaPrincipal
                  pokemonList={pokemonList}
                  setPokemonList={setPokemonList}
                />
              </Route>
            </Switch>
          </DatosAmigosContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
