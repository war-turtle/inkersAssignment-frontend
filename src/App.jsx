import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavComponent from './shared/navbar';
import HomeComponent from './components/home';
import LoginComponent from './components/login';
import './App.css';

const App = () => (
  <Router>
    <NavComponent />
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/login" component={LoginComponent} />
    </Switch>
  </Router>
);

export default App;
