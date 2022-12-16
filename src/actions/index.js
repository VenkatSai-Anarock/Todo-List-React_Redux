import { v4 } from "node-uuid";
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: v4(),
    text,
  };
};

export const receiveTodos = (filter,response) => ({
  type: "RECIEVE_TODOS",
  filter,
  response,
});

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};
