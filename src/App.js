import React from 'react';
import { Link } from 'react-router-dom';


const App = () => {

  return (
    <div className="container">
      <Link
        to="/bookings/?page=0&limit=12"
      >Reservaciones
      </Link>
    </div>
  );
}

export default App;