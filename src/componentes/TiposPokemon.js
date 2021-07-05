import { useEffect, useState } from "react";

export const TiposPokemon = (props) => {
  const { tipo } = props;
  const [tipoClass, setTipoClass] = useState("");

  useEffect(() => {
    const determinarTipo = (tipo) => {
      if (tipo === "grass") {
      }
      switch (tipo) {
        case "normal":
          setTipoClass("type-normal");
          break;
        case "fire":
          setTipoClass("type-fire");
          break;
        case "fighting":
          setTipoClass("type-fighting");
          break;
        case "water":
          setTipoClass("type-water");
          break;
        case "flying":
          setTipoClass("type-flying");
          break;
        case "grass":
          setTipoClass("type-grass");
          break;
        case "poison":
          setTipoClass("type-poison");
          break;
        case "electric":
          setTipoClass("type-electric");
          break;
        case "ground":
          setTipoClass("type-ground");
          break;
        case "psychic":
          setTipoClass("type-psychic");
          break;
        case "rock":
          setTipoClass("type-rock");
          break;
        case "ice":
          setTipoClass("type-ice");
          break;
        case "bug":
          setTipoClass("type-bug");
          break;
        case "dragon":
          setTipoClass("type-dragon");
          break;
        case "ghost":
          setTipoClass("type-ghost");
          break;
        case "dark":
          setTipoClass("type-dark");
          break;
        case "steel":
          setTipoClass("type-steel");
          break;
        case "fairy":
          setTipoClass("type-fairy");
          break;
        default:
          setTipoClass("type-unknown");
      }
    };
    determinarTipo(tipo.type.name);
  }, [tipo.type.name]);

  return (
    <>
      <span className={`mr-2 ${tipoClass} type`}>
        {tipo.type.name.charAt(0).toUpperCase()}
        {tipo.type.name.slice(1)}
      </span>
    </>
  );
};
