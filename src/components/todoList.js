import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Todo from './todo'

class TodoList extends Component {
    state = {  }
    render() {
        return (
            <ul>
    {this.props.todos.map((todo, index) => (
      <Todo key={todo.id} {...todo} onClick={() => this.props.toggleTodo(todo.id)} />
    ))}
  </ul>       
        );
    }
}

export default TodoList;

// const TodoList = ({ todos, onTodoClick }) => (
  
// )

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }
