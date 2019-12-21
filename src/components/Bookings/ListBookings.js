import React from 'react';
import { Link } from 'react-router-dom';

const ListBookings = ({ booking }) => {
  return (
    <li className="list-group-item list-group-item-action p-2 m-1">
      <span className="text-primary">Nombre: </span> {booking.name}
      <br />
      <span className="text-primary">Email: </span> {booking.email}
      <br />
      <span className="text-primary">Clinica: </span>{booking.clinicName}
      <p className="text-right m-0 p-0">
        <Link
          to={`/exploracion/${booking._id}`}
          className="btn btn-link text-info btn-sm"
        >
          Ver exploración
        </Link>
      </p>
    </li>
  );
}

export default ListBookings;
