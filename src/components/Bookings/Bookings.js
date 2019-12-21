import React, { useState, useEffect } from 'react';
import ListBookings from './ListBookings';
import Pagination from '../Pagination';
import { SERVER } from '../../consts';
import axios from 'axios';

const Bookings = ({ location }) => {

  let page = location.search.split('&')[0].split('=')[1];
  let limit = location.search.split('&')[1].split('=')[1];

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const { data } = await axios.get(SERVER + `bookings/?page=${page}&limit=${limit}`)
      setBookings(data.data)
    }
    getBookings();
  }, [page, limit]);

  if (bookings.length === 0) return <p>Cargando reservaciones...</p>

  return (
    <div className="col-md-4">
      <ul className="list-group">
        {
          bookings.map(booking => (
            <ListBookings booking={booking} key={booking._id} />
          ))
        }
      </ul>
      <Pagination />
    </div>
  );
}

export default Bookings;