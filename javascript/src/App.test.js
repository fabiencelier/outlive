import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = configureStore();

  const ConnectedApp = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  ReactDOM.render(ConnectedApp, div);
  ReactDOM.unmountComponentAtNode(div);
});
