import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ListBookings = ({ booking }) => {
  return (
    <Fragment>
      <tr>
        <td>{booking.name}</td>
        <td>{booking.email}</td>
        <td>{booking.clinicName}</td>
        <td>
          <Link
            to={`/exploracion/${booking._id}`}
            className="btn btn-link btn-sm"
          >Ver medicaciones
          </Link>
        </td>
      </tr>
    </Fragment>

  );
}

export default ListBookings;
