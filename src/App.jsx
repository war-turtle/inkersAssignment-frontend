import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavComponent from './shared/navbar';
import HomeComponent from './components/home';
import './App.css';

const App = () => (
  <Router>
    <NavComponent />
    <Route path="/" component={HomeComponent} />
  </Router>
);

export default App;
