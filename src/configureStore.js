import { createStore } from 'redux';
import { loadState, saveState } from './loadState';
import todoApp from './reducers';
import { throttle } from 'lodash';



const addLoggingtoDispatch = (store) =>{
    const rawDispatch = store.dispatch;
    return (action) => {
        console.group(action.type);
        console.log("%c prev state",'color  :gray',store.getState());
        console.log("%c action","color: blue",action);
        const returnValue = rawDispatch(action);
        console.log("%c next state","color: green",store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}
const configureStore = () =>{
const persistedState = loadState();
const store = createStore(todoApp,persistedState);
store.dispatch = addLoggingtoDispatch(store);
store.subscribe(throttle(()=>{
  saveState(store.getState());
},1000));

return store;
}
export default configureStore;