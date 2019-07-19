import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/* Provider gives the stored data(states and actions) to all its child elements. */
import { Provider } from "react-redux";

/* all the stored data, send them to Provider */
import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
