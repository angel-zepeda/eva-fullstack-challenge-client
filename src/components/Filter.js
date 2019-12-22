import React, { useState } from 'react';
import axios from 'axios';
import { SERVER } from '../consts';

const Filter = ({ setExplorations }) => {

  let page = window.location.search.split('&')[0].split('=')[1];
  let limit = window.location.search.split('&')[1].split('=')[1];

  const [search, setSearch] = useState({
    clinic: '',
    medications: '',
    strict: false
  });

  const filterForm = e => {
    setSearch({ ...search, [e.target.name]: e.target.value })
    if (e.target.value === "") return window.location.reload(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(search)
    getExplorationsByClinic(search.clinic, search.medications, page, limit, search.strict)
  }

  const getExplorationsByClinic = async (clinic, medications, page, limit, mode) => {
    const response = await axios.get(SERVER + `/explorations/search/?clinic=${clinic}&medications=${medications}&page=${page}&limit=${limit}&strict=${mode}`)
    console.log(response);
    setExplorations(response.data.data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-group row"
    >
      <select
        name="clinic"
        onChange={filterForm}
        className="form-control col-md-3"
      >
        <option value="">Clínica</option>
        <option value="ANGELOPOLIS">ANGELOPOLIS</option>
        <option value="SANTA_FE">SANTA_FE</option>
        <option value="SOLESTA">SOLESTA</option>
        <option value="EXPLANADA">EXPLANADA</option>
      </select>
      <input
        onChange={filterForm}
        name="medications"
        placeholder="Medicaciones"
        className="form-control col-md-3 ml-2"
      />
      <div className="form-check m-2">
        <label className="form-check-label">
          <input className="form-check-input" name="strict" onChange={filterForm} type="checkbox" value={!search.strict} />
          <span className="text-info">Default: LAX</span>
        </label>
      </div>

      <button
        className="btn btn-primary btn-sm p-2 ml-2"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;