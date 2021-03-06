import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../consts';

const Filter = ({ setExplorations }) => {

  let page = window.location.search.split('&')[0].split('=')[1];
  let limit = window.location.search.split('&')[1].split('=')[1];
  const [strict, setStrict] = useState('');
  const [search, setSearch] = useState({
    clinic: '',
    medications: '',
  });

  const mode = e => { setStrict(e.target.checked) }

  const filterForm = e => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (search.clinic === "") window.location.reload(true)
    getExplorationsByClinic(search.clinic, search.medications, page, limit, strict)
  }

  /**
   * @clinic is the param to search by clinic
   * @medications medications to filter 
   * @page is a number to paginate explorations in server
   * @limit is a number to show how many exploration show
   * @mode strict = true, default = false = lax
   */
  const getExplorationsByClinic = async (clinic, medications, page, limit, mode) => {
    const auth = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
    const response = await axios.get(API_URL + `/explorations/search/?clinic=${clinic}&medications=${medications}&page=${page}&limit=${limit}&strict=${mode}`, auth)
    // if theres not coincidences will refresh page

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
        <option value="">Clínicas</option>
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
          <input
            className="form-check-input"
            name="strict"
            onChange={mode}
            type="checkbox"
            value={!search.strict}
          />
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