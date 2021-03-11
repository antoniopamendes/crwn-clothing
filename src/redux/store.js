import { createStore } from "redux";
import rootReducer from "./root-reducer";

// import { applyMiddleware } from "redux";
// import { logger } from "redux-logger";
// const middlewares = [logger];

const store = createStore(
  rootReducer,
  //   applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
