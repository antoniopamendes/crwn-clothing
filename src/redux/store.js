import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export let store;

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
