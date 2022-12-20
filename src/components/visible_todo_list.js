import React from "react";
import { connect } from "react-redux";
import TodoList from "./todo_list";
import * as actions from "../actions";
import { getVisibleTodos,getIsFetching ,getErrorMessage} from "../reducers";
import FetchError from "./fetchError";
class VisibleTodoList extends React.Component {
   componentDidMount() {
      this.fetchData();
   }
   componentDidUpdate(prevProps) {
      if (this.props.filter !== prevProps.filter) {
         this.fetchData();
      }
   }
   fetchData = () => {
      const { filter, fetchTodos } = this.props;
      fetchTodos(filter);
   };
   render() {
      const { toggleTodo, errorMessage, todos,isFetching } = this.props;
      console.log(errorMessage)
      if(isFetching && !todos.length){
        return <p>Loading... </p>
      }

      if(errorMessage && !todos.length){
        return (<FetchError message={errorMessage} onRetry = {this.fetchData}/>)
      }

      return <TodoList todos={todos} onTodoClick={toggleTodo} />;
   }
}
const mapStateToProps = (state, ownProps) => {
   return {
      filter: ownProps.filter,
      isFetching: getIsFetching(state,ownProps.filter),
      todos: getVisibleTodos(state, ownProps.filter),
      errorMessage: getErrorMessage(state, ownProps.filter)
   };
};

VisibleTodoList = connect(mapStateToProps, actions)(VisibleTodoList);

export default VisibleTodoList;
