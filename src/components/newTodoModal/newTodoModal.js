import React from 'react';
import ReactDOM from 'react-dom';
import './newTodoModal.css';
import { TodoContext } from '../../context/TodoContext';

const NewTodoModal = () => {

    const [newTodoText, setNewTodoText] = React.useState('');

    const { modalOpenState, setModalOpenState, addTodoItem} = React.useContext(TodoContext);

    

    const handleChangeTextarea = (event) => {


        setNewTodoText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(newTodoText) {
            addTodoItem(newTodoText);

            setModalOpenState(modalOpenState => !modalOpenState)
            setNewTodoText('');
        }
    }



    return ReactDOM.createPortal(

        <dialog open={modalOpenState} className="new-todo-modal-container">

            <form className='new-todo-modal'>

                <h2 className='new-todo-modal__title'>Create a new <span>Task!</span></h2>
                <textarea 
                placeholder='Your new task ✍🏼' 
                type='text'
                value={newTodoText}
                className='new-todo-modal__textarea'
                onChange={handleChangeTextarea}
                autoFocus={true}
                ></textarea>

                <button 
                className='new-todo-modal__button' 
                type='submit'
                onClick={handleSubmit}
                >
                Create
                </button>

            </form>

        </dialog>,

        document.getElementById('modal')
    )
}

export default NewTodoModal;
