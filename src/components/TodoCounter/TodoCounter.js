import React from 'react';
import './TodoCounter.css'

const TodoCounter = ({todos}) => {

    const todoCount = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    return (
        <h2 className="todo-counter">
            {todoCount
                ? `Completed ${completedTodos} out of ${todoCount}`
                : 'Welcome!'
            }   
        </h2>
    );
}

export default TodoCounter;
