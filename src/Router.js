import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Explorations from './components/Explorations/Explorations';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFound from './components/NotFound';

const PrivateRoute = (props) => {
  let token = localStorage.getItem('token');
  if (token === null) {
    return <Redirect to="/" />
  }
  if (window.location.pathname === '/exploraciones') {
    return <Redirect to="/exploraciones/?page=0&limit=15" />
  }
  return <Route {...props} />
}


const RouterApp = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Register} />
        <PrivateRoute path="/exploraciones" component={Explorations} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterApp;
