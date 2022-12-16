import React, { PropTypes } from 'react';
import Todo from './todo';

const TodoList = ({ todos, onTodoClick }) => {  
  console.log("Yo",todos)
  return (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  )
};



export default TodoList;
