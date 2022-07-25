import React from 'react';
import './TodoCounter.css'

const TodoCounter = ({todos}) => {

    const todoCount = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    return (
        <h2 className="todo-counter">Completed {completedTodos} out of {todoCount}</h2>
    );
}

export default TodoCounter;
