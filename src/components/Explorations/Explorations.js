import React, { useState, useEffect } from 'react';
import ListExplorations from './ListExplorations';
import Pagination from '../Pagination';
import { API_URL } from '../../consts';
import axios from 'axios';
import Filter from '../Filter';

const Explorations = ({ location }) => {

  /**
   * page its got with split query params for search explorations
   * limit its got with split query params for search explorations
   */
  let page = location.search.split('&')[0].split('=')[1];
  let limit = location.search.split('&')[1].split('=')[1];

  const [explorations, setExplorations] = useState();

  useEffect(() => {
    const auth = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
    /**
     * getExplorations will return all explorations and set data in exploration hook
     */
    const getExplorations = async () => {
      const { data } = await axios.get(API_URL + `explorations/?page=${page}&limit=${limit}`, auth)
      setExplorations(data.data)
    }
    getExplorations();
  }, [page, limit]);

  /**
   * show loading if theres not explorations yet
   */
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
            /**
             * ListExplorations component will list cards with bookings and explorations found
             */
            <ListExplorations exploration={exploration} key={exploration._id} />
          ))
        }
      </div>
      <hr />
      <div className="col-md-12">
        <Pagination />
      </div>
    </div>
  );
}

export default Explorations;