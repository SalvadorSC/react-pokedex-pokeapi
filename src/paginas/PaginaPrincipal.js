import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import { DatosAmigosContext } from "../contexts/DatosAmigosContext";
import { ListaPokemon } from "../componentes/ListaPokemon.js";

export const PaginaPrincipal = () => {
  const { urlAPI, allPokemon } = useContext(DatosAmigosContext);
  const { fetchGlobal, error } = useFetch();

  return (
    <>
      <ul className="pl-0 row">
        <ListaPokemon allPokemon={allPokemon} />
      </ul>
    </>
  );
};
