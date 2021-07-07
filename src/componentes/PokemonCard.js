import { TiposPokemon } from "./TiposPokemon";

export const PokemonCard = (props) => {
  const { pokemon, i } = props;

  return (
    <>
      <li key={i} className="col-sm-12 col-md-6 col-xl-4 list-unstyled">
        <ul
          key={`ul-${i}`}
          className="list-unstyled targeta-pokemon mb-5 p-4 d-flex justify-content-between"
        >
          <div className="d-flex flex-column justify-content-around">
            <li key={pokemon.id}>
              N º: <span className="name-targeta-pokemon">{pokemon.id}</span>
            </li>
            <li key={pokemon.name}>
              Name:
              <span className="name-targeta-pokemon">
                {" "}
                {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(
                  1
                )}`}
              </span>
            </li>
            <li key={pokemon.types}>
              Type:{" "}
              {pokemon.types.map((tipo) => (
                <TiposPokemon key={`${tipo.type.name}${i}`} tipo={tipo} />
              ))}
            </li>
          </div>
          <img
            key={`${pokemon.sprites.front_default}`}
            className="img-targeta-pokemon"
            src={`${pokemon.sprites.front_default}`}
            alt={pokemon.name}
          />
        </ul>
      </li>
    </>
  );
};
