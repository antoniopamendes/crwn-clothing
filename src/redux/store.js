import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// import { applyMiddleware } from "redux";
// import { logger } from "redux-logger";
// const middlewares = [logger];

export const store = createStore(
  rootReducer,
  //   applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
