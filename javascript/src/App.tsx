import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { Settings } from "./components/settings/Settings";
import { Statistics } from "./components/Statistics";
import { Description } from "./components/description/Description";
import { isNotificationAllowed } from "./worker/notif";
import {
  registerToNotif,
  initFirebaseApp,
  sendTokenToServer
} from "./worker/init-fcm";

class App extends React.Component {
  componentDidMount() {
    if (isNotificationAllowed) {
      const messaging = initFirebaseApp();
      if (messaging != null) {
        registerToNotif(messaging);
        sendTokenToServer(messaging);
      }
    }
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
