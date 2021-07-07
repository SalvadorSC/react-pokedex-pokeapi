import { useState } from "react";
import { FormFilter } from "./FormFilter";

export const Cabecera = (props) => {
  const { regionSelected, setRegionSelected, setAllPokemon } = props;

  const [showFormFilter, setShowFormFilter] = useState(false);

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
        {showFormFilter && (
          <FormFilter
            setShowFormFilter={setShowFormFilter}
            regionSelected={regionSelected}
            setRegionSelected={setRegionSelected}
            setAllPokemon={setAllPokemon}
          />
        )}
      </header>
    </>
  );
};
