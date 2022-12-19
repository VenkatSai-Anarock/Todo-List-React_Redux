import { createStore } from "redux";
import AddTodo from "./components/add_todo";
import Footer from "./components/footer";
import VisibleTodoList from "./components/visible_todo_list";
import "./App.css";
import { useParams } from "react-router-dom";
import { fetchTodos } from "./api";
import { useEffect } from "react";
function App() {
  const { filter } = useParams();
  return (
    <div className="app">
      
      <AddTodo />
        <VisibleTodoList filter={filter||'all'} />
      <Footer />
    </div>
  );
}

export default App;
