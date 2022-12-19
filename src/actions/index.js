import { v4 } from "node-uuid";
import * as api from "../api/index.js";
export const addTodo = (text) => {
   return {
      type: "ADD_TODO",
      id: v4(),
      text,
   };
};

export const fetchTodos = (filter) => api.fetchTodos(filter).then((response) => receiveTodos(filter, response));
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
