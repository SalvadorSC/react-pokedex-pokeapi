import { useContext, useState } from "react";
import { DatosAmigosContext } from "../contexts/DatosAmigosContext";
import { FormFilter } from "./FormFilter";

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
  const [showFormFilter, setShowFormFilter] = useState(false);

  const formFilter = <>Hola</>;

  return (
    <>
      <header className="cabecera my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Pokédex</h1>
          {!showFormFilter && (
            <button
              className="btn btn-purple"
              onClick={() => {
                setShowFormFilter(true);
              }}
            >
              ···
            </button>
          )}
        </div>
        {showFormFilter && <FormFilter setShowFormFilter={setShowFormFilter} />}
      </header>
    </>
  );
};
