import { applyMiddleware, createStore } from "redux";
import todoApp from "./reducers";
// import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
// const logger = (store) => (next) => (action) => {
//    console.group(action.type);
//    console.log("%c prev state", "color: gray", store.getState());
//    console.log("%c action", "color: blue", action);
//    const returnValue = next(action);
//    console.log("%c next state", "color: green", store.getState());
//    console.groupEnd(action.type);
//    return returnValue;
// };

// const promise = (store) => (next) => (action) => {
//    if (typeof action.then === "function") {
//       return action.then(next);
//    }
//    return next(action);
// };

// const wrapDispatchWithMiddleWares = (store, middleWares) => {
//    middleWares.slice().reverse().forEach((middleWare) => (store.dispatch = middleWare(store)(store.dispatch)));
// };

// const thunkMiddleWare = (store) => (next) => (action) => 
// typeof action === 'function' ? action(store.dispatch,store.getState):(next(action));


const configureStore = () => {
   const middleWares = [thunk];
   middleWares.push(createLogger());
   const store = createStore(todoApp,applyMiddleware(...middleWares))
   return store;
};

export default configureStore;
