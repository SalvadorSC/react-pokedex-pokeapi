import { useContext } from "react";
import { DatosAmigosContext } from "../contexts/DatosAmigosContext";
import { FormularioAmigos } from "./FormularioAmigos";

export const Cabecera = (props) => {
  const { nAmigos, setAmigos, amigoParaEditar, setAmigoParaEditar } = props;
  const {
    urlAPI,
    amigos,
    editarAmigo,
    llamadaListaAmigos,
    setShowFormulario,
    showFormulario,
  } = useContext(DatosAmigosContext);
  return (
    <>
      <header className="cabecera d-flex justify-content-between align-items-center my-5">
        <h1>Pokédex</h1>
      </header>
    </>
  );
};
