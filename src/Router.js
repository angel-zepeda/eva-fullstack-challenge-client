import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Bookings from './components/Bookings/Bookings';
import Explorations from './components/Explorations/Explorations';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


const PrivateRoute = (props) => {
  let token = localStorage.getItem('token');
  if (token === null) {
    return <Redirect to="/" />
  }

  return <Route {...props} />
}


const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Register} />
        <PrivateRoute path="/bookings" component={Bookings} />
        <PrivateRoute exact path="/exploracion/:id" component={Explorations} />
      </Switch>
    </Router>
  );
}

export default RouterApp;
