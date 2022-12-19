
import {connect} from "react-redux";
import TodoList from "./todo_list";
import { toggleTodo } from "../actions";
import {getVisibleTodos} from '../reducers'

const mapStateToProps = (state ,ownProps) =>{
    return {
        todos: getVisibleTodos(state, ownProps.filter),
      };
}

const VisibleTodoList = connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
)(TodoList);


export default VisibleTodoList;