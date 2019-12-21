import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookings from './components/Bookings/Bookings';
import Explorations from './components/Explorations/Explorations';
import App from './App';

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/bookings" component={Bookings} />
        <Route exact path="/exploracion/:id" component={Explorations} />
      </Switch>
    </Router>
  );
}

export default RouterApp;
