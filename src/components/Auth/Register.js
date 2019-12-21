import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import { SERVER } from '../../consts';
import axios from 'axios';

const Register = () => {

  const [user, setUser] = useState({ email: '', password: '' });
  const [showSpinner, setShowSpinner] = useState(false);
  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleOnSubmit = e => {
    e.preventDefault();
    register();
  }

  const register = async () => {
    const response = await axios.post(SERVER + '/register', user);
    console.log(response);
  }


  return (
    <div>
      <div className="col-md-4 col-sm-12 mx-auto card mt-5 p-4">
        <h2 className="text-center">Crear cuenta</h2>
        <form onSubmit={handleOnSubmit} className="form-group card-body p-2">
          <label htmlFor="email">Email: </label>
          <input
            value={user.email}
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            value={user.password}
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
          />
          <button
            disabled={showSpinner}
            type="submit"
            className="btn btn-success text-white col-md-12 col-sm-12 mt-3"

          >
            Registrar
          </button >
        </form>
      </div>
      {
        showSpinner ?
          <Spinner />
          : null
      }
    </div >
  );
}

export default Register;