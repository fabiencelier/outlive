import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { Settings } from "./components/settings/Settings";
import { Statistics } from "./components/Statistics";
import { Description } from "./components/description/Description";

import { messaging } from "./init-fcm";

class App extends React.Component {
  componentDidMount() {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log("Token in app: ", token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", message =>
      console.log(message)
    );
  }

  render = () => (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/settings" component={Settings} />
        <Route path="/description/:id" component={Description} />
      </div>
    </Router>
  );
}

export default App;
