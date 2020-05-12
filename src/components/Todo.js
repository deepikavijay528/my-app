import React, { Component } from 'react';
import '../App.css';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() { 


        console.log('props', this.props.todos);
        console.log('props', this.props.todos);
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
                // <h1>{todo.Name}</h1>
            ));
       
    
    }

}
Todos.propTypes ={
    todos:PropTypes.array.isRequired
}
export default Todos;
