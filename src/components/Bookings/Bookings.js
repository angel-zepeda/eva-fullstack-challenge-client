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
    <div className="container-fluid">
      <div className="card p-2 shadow-sm">
        <table className="table table-sm">
          <thead class="bg-primary text-white">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Clinica</th>
              <th scope="col">Medicaciones</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map(booking => (
                <ListBookings booking={booking} key={booking._id} />
              ))
            }
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}

export default Bookings;