import React from 'react';
import './TodoList.css'

const TodoList = ({ children, loading, onRender }) => {

    // /* ----OPTION 1 AND 2---------- TodoItems rendered with children or with render props ------------------- */
    const renderFunc = children || onRender; 

    return (
        <section className="todo-list-container">

        {!loading && 

            <ul className="todo-list">
                {renderFunc}
            </ul>
        }
        
        </section>
    );  
}

export default TodoList;
