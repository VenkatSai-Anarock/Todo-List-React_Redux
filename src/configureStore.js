import { createStore } from 'redux';
import { loadState, saveState } from './loadState';
import todoApp from './reducers';
import { throttle } from 'lodash';

const configureStore = () =>{
const persistedState = loadState();
const store = createStore(todoApp,persistedState);

store.subscribe(throttle(()=>{
  saveState(store.getState());
},1000));

return store;
}
export default configureStore;