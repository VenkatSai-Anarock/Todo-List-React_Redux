import { useState } from "react";
import {PropTypes} from 'react'
import { connect } from 'react-redux';
import { addTodo } from "../actions";
 function AddTodo ({dispatch}) {
    const [todoText,setTodoText] = useState(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!todoText){
            return;
        }
        else{
            dispatch(addTodo(todoText));
            setTodoText('');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type = "text" 
            placeholder="Add a todo" value = {todoText}
            onChange = {(e)=>setTodoText(e.target.value)}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

  
export default connect()(AddTodo);