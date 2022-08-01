import React from 'react';
import './TodoList.css'

const TodoList = ({ children, loading }) => {

    return (
        <section className="todo-list-container">

        {!loading && 

            <ul className="todo-list">
                {children}
            </ul>
        }
        
        </section>
    );  
}

export default TodoList;
