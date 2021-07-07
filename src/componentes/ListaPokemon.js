import { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const ListaPokemon = (props) => {
  const { allPokemon, pokemonList, setPokemonList } = props;

  useEffect(() => {
    const getPokemonList = async () => {
      await allPokemon.forEach(async (pokemon, i) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        if (i === 0) {
          setPokemonList([data]);
        } else {
          setPokemonList((oldArray) => [
            ...oldArray.sort((a, b) => a.id - b.id),
            data,
          ]);
        }

        // Filtrar pokemon list solo con los pokemon que haya en el allPokemon
      });
    };
    getPokemonList();
  }, [allPokemon, setPokemonList]);
  return (
    <>
      {pokemonList.map((pokemon, i) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} i={i} />
      ))}
    </>
  );
};
