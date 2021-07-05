import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { TiposPokemon } from "./TiposPokemon";

export const ListaPokemon = (props) => {
  const { allPokemon } = props;
  const { fetchGlobal, error } = useFetch();
  const [pokemonList, setPokemonList] = useState([]);
  const organizePokemon = (pokemon, region) => {
    setPokemonList((oldArray) => [...oldArray, pokemon]);
  };
  useEffect(() => {
    const getPokemonList = () => {
      setPokemonList([]);
      allPokemon.forEach(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokemonResponse = await response.json();
        /* console.log(pokemonResponse); */

        organizePokemon(pokemonResponse);
      });
    };
    getPokemonList();
  }, [allPokemon]);
  return (
    <>
      {pokemonList.map((pokemon) => (
        <li
          key={pokemon.id}
          className="col-sm-12 col-md-6 col-xl-4 list-unstyled"
        >
          <ul className="list-unstyled targeta-pokemon mb-5 p-4 d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-around">
              <li>
                N º: <span className="name-targeta-pokemon">{pokemon.id}</span>
              </li>
              <li>
                Name:
                <span className="name-targeta-pokemon">
                  {" "}
                  {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(
                    1
                  )}`}
                </span>
              </li>
              <li>
                Type:{" "}
                {pokemon.types.map((tipo) => (
                  <TiposPokemon tipo={tipo} />
                ))}
              </li>
            </div>
            <img
              className="img-targeta-pokemon"
              src={`${pokemon.sprites.front_default}`}
              alt={pokemon.name}
            />
          </ul>
        </li>
      ))}
    </>
  );
};
