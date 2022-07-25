import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {

    return (
        <li className="todo-item">
            <span className="todo-item__status" onClick={props.updateTodoStatus}>
                {props.completed 
                    ? '🟩' 
                    : '⬜'
                }
            </span>
            <p className={`todo-item__text ${props.completed && '--completed'}`}>
                {props.text}
            </p>
            <span className="todo-item__delete" onClick={props.deleteTodoItem}>🗑️</span>
        </li>
    );
}

export default TodoItem;
