import React from "react";
import { connect } from "react-redux";
import TodoList from "./todo_list";
import * as actions from "../actions";
import { getVisibleTodos,getIsFetching } from "../reducers";
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
      const { toggleTodo, todos,isFetching } = this.props;
      if(isFetching && !todos.length){
        return <p>Loading... </p>
      }
      return <TodoList todos={todos} onTodoClick={toggleTodo} />;
   }
}
const mapStateToProps = (state, ownProps) => {
   return {
      filter: ownProps.filter,
      isFetching: getIsFetching(state,ownProps.filter),
      todos: getVisibleTodos(state, ownProps.filter),
   };
};

VisibleTodoList = connect(mapStateToProps, actions)(VisibleTodoList);

export default VisibleTodoList;
