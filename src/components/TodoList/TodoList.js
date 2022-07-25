import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    return (
        <section className="todo-list-container">
            <ul className="todo-list">
                {props.children}
            </ul>
        </section>
    );  
}

export default TodoList;
