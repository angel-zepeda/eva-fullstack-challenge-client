import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import { API_URL } from '../../consts';
import Spinner from '../Spinner';
import Notice from '../Notice';

const Login = () => {

  const [user, setUser] = useState({ email: '', password: '', getToken: true });
  const [access, setAccess] = useState(false);
  const [error, setError] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    login();
  }

  const login = async () => {
    setShowSpinner(true);
    const response = await axios.post(API_URL + '/login', user);
    if (response.data.code === 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.user.email);
      setShowSpinner(false);
      setAccess(true);
    }
    if (response.data.code === 404) {
      setShowSpinner(false);
      setError(response.data.message);
    }
  }

  if (access) return <Redirect to="/exploraciones/?page=0&limit=15" />

  return (
    <div>
      <h2 className="text-center">Fullstack eva challenge</h2>
      {error ?
        <Notice type="danger" message={error} />
        : null
      }
      <div className="col-md-4 col-sm-12 mx-auto card mt-5 p-4">
        <h2 className="text-center">Iniciar sesión</h2>
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
            className="btn btn-primary text-white col-md-12 col-sm-12 mt-3"

          >
            Iniciar sesión
          </button >
          <Link
            className="btn btn-success col-md-12 mt-1"
            to="/registro"
          >Registrarse
          </Link>
        </form>
      </div>
      {
        showSpinner ?
          <Spinner />
          : null
      }
    </div>
  );
}

export default Login;