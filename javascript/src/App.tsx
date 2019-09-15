import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Settings } from "./components/settings/Settings";
import { Statistics } from "./components/Statistics";
import { Description } from "./components/description/Description";

export default () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/settings" component={Settings} />
      <Route path="/description/:id" component={Description} />
    </div>
  </Router>
);
