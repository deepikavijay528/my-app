import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    render() {
        return (
           <p>{this.props.todo.Name}</p>
        )
    }
}
TodoItem.propTypes ={
    todo:PropTypes.object.isRequired
}
export default TodoItem
