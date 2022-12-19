import { createStore } from "redux";
import todoApp from "./reducers";

const logger = (store) => (next) => (action) => {
   console.group(action.type);
   console.log("%c prev state", "color: gray", store.getState());
   console.log("%c action", "color: blue", action);
   const returnValue = next(action);
   console.log("%c next state", "color: green", store.getState());
   console.groupEnd(action.type);
   return returnValue;
};

const promise = (store) => (next) => (action) => {
   if (typeof action.then === "function") {
      return action.then(next);
   }
   return next(action);
};

const wrapDispatchWithMiddleWares = (store, middleWares) => {
   middleWares.slice().reverse().forEach((middleWare) => (store.dispatch = middleWare(store)(store.dispatch)));
};
const configureStore = () => {
   const store = createStore(todoApp);
   const middleWares = [promise];
   middleWares.push(logger);
   wrapDispatchWithMiddleWares(store, middleWares);
   return store;
};

export default configureStore;
