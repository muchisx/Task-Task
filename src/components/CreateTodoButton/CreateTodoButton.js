import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = ({ modalOpenState, setModalOpenState}) => {

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
