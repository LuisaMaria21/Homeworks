import './App.css'
import React from 'react';
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import NavComponent from './NavComponent';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <NavComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;

