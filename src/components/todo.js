import React, { Component } from 'react';
import PropTypes from 'prop-types'

class  Todo extends Component {
    state = {  }
    constructor(props){
        super(props);
    console.log(props.text)
    }
    render() {
        return (
            <li
    onClick={this.props.onClick}
    style={ {
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }}
  >
    {this.props.text}
  </li> 
        );
    }
}

export default Todo;
// const Todo = ({ onClick, completed, text }) => (
 
// )

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

// export default Todo