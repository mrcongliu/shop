import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

/* for debugging purposes */
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/* set up middlewares, they are gonna be in an array, which you can check in redux documentation. */
const middlewares = [logger];

/* using spread operator to put all the items inside that array into applyMiddleware function */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
