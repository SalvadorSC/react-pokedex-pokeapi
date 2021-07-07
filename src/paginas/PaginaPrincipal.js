import { useContext } from "react";
import { DatosAmigosContext } from "../contexts/DatosAmigosContext";
import { ListaPokemon } from "../componentes/ListaPokemon.js";

export const PaginaPrincipal = (props) => {
  const { allPokemon } = useContext(DatosAmigosContext);
  const { pokemonList, setPokemonList } = props;

  return (
    <>
      <ul className="pl-0 row">
        <ListaPokemon
          allPokemon={allPokemon}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      </ul>
    </>
  );
};
