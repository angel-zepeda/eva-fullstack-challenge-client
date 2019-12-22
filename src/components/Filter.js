import React, { useState } from 'react';
import axios from 'axios';
import { SERVER } from '../consts';

const Filter = ({ setExplorations }) => {

  const [clinic, setClinic] = useState('');

  const filterForm = e => {
    let page = window.location.search.split('&')[0].split('=')[1];
    let limit = window.location.search.split('&')[1].split('=')[1];
    if (e.target.value === "") return window.location.reload(true);
    getExplorationsByClinic(e.target.value, page, limit);
  }

  const getExplorationsByClinic = async (clinic, page, limit) => {
    const response = await axios.get(SERVER + `/explorations/search/?clinic=${clinic}&page=${page}&limit=${limit}`)
    setExplorations(response.data.data);
  }

  return (
    <form className="form-group row">
      <select
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
        placeholder="Medicaciones"
        className="form-control col-md-3 ml-2"
      />
      <button
        className="btn btn-primary btn-sm p-2 ml-2"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;