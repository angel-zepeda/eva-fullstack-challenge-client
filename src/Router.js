import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookings from './components/Bookings/Bookings';
import Explorations from './components/Explorations/Explorations';
import Login from './components/Auth/Login';

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/bookings" component={Bookings} />
        <Route exact path="/exploracion/:id" component={Explorations} />
      </Switch>
    </Router>
  );
}

export default RouterApp;
