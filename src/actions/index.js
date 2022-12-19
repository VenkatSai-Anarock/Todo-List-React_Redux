import { v4 } from "node-uuid";
import * as api from "../api/index.js";
import { getIsFetching } from "../reducers/createList.js";
export const addTodo = (text) => {
   return {
      type: "ADD_TODO",
      id: v4(),
      text,
   };
};

const requestTodos = (filter) => ({
   type: "REQUEST_TODOS",
   filter,
});

export const fetchTodos = (filter) => async (dispatch,getState) => {
  if(getIsFetching(getState(),filter)){
    return  Promise.resolve();
  }
   dispatch(requestTodos(filter));
   return api.fetchTodos(filter).then((response) => {
      dispatch(receiveTodos(filter, response));
   });
};
const receiveTodos = (filter, response) => ({
   type: "RECEIVE_TODOS",
   filter,
   response,
});

export const toggleTodo = (id) => {
   return {
      type: "TOGGLE_TODO",
      id,
   };
};
