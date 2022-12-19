import { createStore, applyMiddleware } from "redux";
import { loadState, saveState } from "./loadState";
import todoApp from "./reducers";
import { throttle } from "lodash";

// const addLoggingtoDispatch = (store) =>{
//     const rawDispatch = store.dispatch;
//     return (next) =>{
//     return (action) => {
//         console.group(action.type);
//         console.log("%c prev state",'color  :gray',store.getState());
//         console.log("%c action","color: blue",action);
//         const returnValue = rawDispatch(action);
//         console.log("%c next state","color: green",store.getState());
//         console.groupEnd(action.type);
//         return returnValue;
//     }
//   }
// }

const middleWare1 = (store) => {
   console.log("store");
   return (next) => {
      console.log("Next",next);

      return (action) => {
        console.log("PRe actions 1")
        next(action)
        console.log("Post Actions 1");

      };
   };
};

const middleWare2 = (store) => {
  console.log("store2");
  return (next) => {
     console.log("Next2",next);
     return (action) => {
      console.log("Pre action 2");
       next(action);
       console.log("Post action 2");
     };
  };
};

const configureStore = () => {
   const persistedState = loadState();
   const store = createStore(todoApp, persistedState, applyMiddleware(middleWare1,middleWare2));

   store.subscribe(
      throttle(() => {
         saveState(store.getState());
      }, 1000)
   );

   return store;
};
export default configureStore;
