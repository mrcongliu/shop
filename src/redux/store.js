import { createStore, applyMiddleware } from "redux";

/* for debugging purposes */
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import { createSocket } from "dgram";

/* set up middlewares, they are gonna be in an array, which you can check in redux documentation. */
const middlewares = [logger];

/* using spread operator to put all the items inside that array into applyMiddleware function */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
/* Bring store to index.js */
