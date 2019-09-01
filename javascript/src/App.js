import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Settings } from './components/Settings';
import { Statistics } from './components/Statistics';
import { Description } from './components/Description';

export default (props) => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/settings" component={Settings} />
      <Route path="/description" component={Description} />
    </div>
  </Router>
);
