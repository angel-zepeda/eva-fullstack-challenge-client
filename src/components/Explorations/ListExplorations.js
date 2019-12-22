import React from 'react';

const ListExplorations = ({ exploration }) => {

  return (
    <div className="card shadow-sm col-md-2 m-1 p-2">
      <p><span className="text-primary">Nombre: </span>{exploration.bookingId.name}</p>
      <p><span className="text-primary">Email: </span> {exploration.bookingId.email}</p>
      <p><span className="text-primary">Clínica: </span> {exploration.bookingId.clinicName}</p>
      <p><span className="text-primary">Medicaciones: </span>
        {
          exploration.consumedMedications.length > 0 ?
            exploration.consumedMedications.map(medication => (
              <span key={medication}>
                {medication},
              </span>
            ))
            : <span className="text-info">No hay medicaciones</span>
        }
      </p>
    </div>
  );
}

export default ListExplorations;
