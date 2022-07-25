import React from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../../context/TodoContext';

const CreateTodoButton = (props) => {

    const { modalOpenState, setModalOpenState} = React.useContext(TodoContext);

    const launchTodoCreation = () => {
        
        setModalOpenState(modalOpenState => !modalOpenState);
        
    }

    return (
        <button 
        className={`create-todo-button ${modalOpenState ? '--modal-open' : ''}`}
        type="button"
        onClick={launchTodoCreation}
        >
        <span>+</span>
        </button>
    );
}

export default CreateTodoButton;
