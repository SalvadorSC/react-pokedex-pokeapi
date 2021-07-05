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

  const getUrlAPI = (region) => {
    switch (region) {
      case "1":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?limit=151");
        break;
      case "2":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100");
        break;
      case "3":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=251&limit=135");
        break;
      case "4":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=386&limit=107");
        break;
      case "5":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=493&limit=156");
        break;
      case "6":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=649&limit=72");
        break;
      case "7":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=721&limit=88");
        break;
      case "8":
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?offset=809&limit=89");
        break;
      default:
        setUrlAPI("https://pokeapi.co/api/v2/pokemon?limit=10");
    }
  };

  useEffect(() => {
    const llamadaListaPokemon = async () => {
      console.log(typeof regionSelected);
      getUrlAPI(regionSelected);
      console.log(urlAPI);

      const response = await fetch(urlAPI);
      const pokemonsters = await response.json();
      setAllPokemon(pokemonsters.results);
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
            />
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
