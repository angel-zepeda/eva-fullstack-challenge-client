import React, { useState, useEffect } from 'react';
import ListExplorations from './ListExplorations';
import Pagination from '../Pagination';
import { SERVER } from '../../consts';
import axios from 'axios';
import Filter from '../Filter';

const Explorations = ({ location }) => {

  let page = location.search.split('&')[0].split('=')[1];
  let limit = location.search.split('&')[1].split('=')[1];

  const [explorations, setExplorations] = useState();

  useEffect(() => {
    const getExplorations = async () => {
      const { data } = await axios.get(SERVER + `explorations/?page=${page}&limit=${limit}`)
      setExplorations(data.data)
    }
    getExplorations();
  }, [page, limit]);

  if (!explorations) return <h1>Cargando exploraciones...</h1>

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <h3>Exploraciones</h3>
        </div>
        <div className="col-md-9">
          <Filter setExplorations={setExplorations} />
        </div>
      </div>
      <div className="row" style={{ height: '80vh', margin: '0 auto' }}>
        {
          explorations.map(exploration => (
            <ListExplorations exploration={exploration} key={exploration._id} />
          ))
        }
      </div>
      <hr />
      <Pagination />
    </div>
  );
}

export default Explorations;