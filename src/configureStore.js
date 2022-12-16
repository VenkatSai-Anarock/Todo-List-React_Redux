import { createStore,applyMiddleware } from "redux";
import promise from "redux-promise";
import { createLogger } from "redux-logger";
import { loadState, saveState } from "./loadState";
import todoApp from "./reducers";
import { throttle } from "lodash";

const addPromisesSupportToDispatch = (store) => (next) => (action) => {
      if (typeof action.then === "function") {
        return action.then(next);
      }
      return next(action);
};
const addLoggingtoDispatch = (store) =>  (next) => (action) => {
      console.group(action.type);
      console.log("%c prev state", "color  :gray", store.getState());
      console.log("%c action", "color: blue", action);
      const returnValue = next(action);
      console.log("%c next state", "color: green", store.getState());
      console.groupEnd(action.type);
      return returnValue;
};
const wrapDispatchWithMiddles = (store, middlewares) => {
  middlewares.forEach((middleware) => (store.dispatch = middleware(store)(store.dispatch)));
};
const configureStore = () => {
  const middlewares = [promise];
  middlewares.push(createLogger());
  const store = createStore(todoApp,applyMiddleware(...middlewares));
  return store;
};
export default configureStore;
