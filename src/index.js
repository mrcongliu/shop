import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/* Provider gives the stored data(states and actions) to all its child elements. */
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

/* all the stored data, send them to Provider */
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
