import { useCallback, useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const FormFilter = (props) => {
  const { setShowFormFilter, regionSelected, setRegionSelected } = props;
  const [nombre, setNombre] = useState();
  const [allRegions, setAllRegions] = useState([]);
  const tratarAmigo = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function getRegions() {
      let response = await fetch("https://pokeapi.co/api/v2/region");
      response = await response.json();
      setAllRegions(response.results);
    }
    getRegions();
  }, []);

  const regionsList = allRegions.map((region) => (
    <option value={region.url[region.url.length - 2]}>
      {region.name.charAt(0).toUpperCase()}
      {region.name.slice(1)}
    </option>
  ));

  return (
    <>
      <form onSubmit={tratarAmigo}>
        <div className="row">
          <div className="col-4 ">
            <label htmlFor="nombre">Search by name</label>
            <input
              type="text"
              className="form-control campo-form-amigo"
              id="nombre"
              placeholder={"e. Poliwhirl"}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="col-2">
            <label name="valoracion" id="valoracion" htmlFor="valoracion">
              Region
            </label>
            <select
              value={regionSelected}
              onChange={(e) => {
                setRegionSelected(e.target.value);
              }}
              className="custom-select campo-form-amigo"
            >
              <option value={0}>All Regions</option>
              {regionsList}
            </select>
          </div>
          <div className="col-2 d-flex flex-column mb-5">
            <button type="submit" className="btn boton mb-1"></button>
            <button
              className="btn boton"
              onClick={() => {
                setShowFormFilter(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
