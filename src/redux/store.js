import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import { logger } from "redux-logger";
import thunk from 'redux-thunk'

export let store;

if (process.env.NODE_ENV === "development") {
  const middlewares = [logger, thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(rootReducer);
}

export const persistor = persistStore(store);
