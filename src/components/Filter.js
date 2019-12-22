import React from 'react';

const Filter = () => {
  return (
    <form className="form-group row">
      <select
        className="form-control col-md-3"
      >
        <option value="">Clínica</option>
        <option value="">ANGELOPOLIS</option>
        <option value="">SANTA_FE</option>
        <option value="">SOLESTA</option>
        <option value="">EXPLANADA</option>
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