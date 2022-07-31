import '../assets/App.css';
import React from 'react'

import { useTodosProps } from '../hooks/useTodosProps';

import TodoTitle from '../components/TodoTitle/TodoTitle';
import TodoHeader from '../components/TodoHeader/TodoHeader';
import TodoCounter from '../components/TodoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/TodoList/TodoList';
import TodoItem from '../components/TodoItem/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton';
import NewTodoModal from '../components/newTodoModal/newTodoModal';
import ChangeAlertModal from '../components/ChangeAlertModal/ChangeAlertModal';
import TodoContentLoader from '../components/TodoContentLoader/TodoContentLoader';



function App() {

    const {    
        loading,
        error,
        todos,
        searchValue,
        setSearchValue,
        filteredTodos,
        updateTodoStatus,
        deleteTodoItem,
        modalOpenState,
        setModalOpenState,
        addTodoItem,
        syncronizeTodos,
    } = useTodosProps()

    return (

        <>

            {modalOpenState && <NewTodoModal modalOpenState={modalOpenState} setModalOpenState={setModalOpenState} addTodoItem={addTodoItem}/>}
            {<ChangeAlertModal syncronizeTodos={syncronizeTodos}/>}

            <main className="main-container">
                
                <TodoTitle />

                {error && <p>There was an error, reload the page or try later.</p>}
                {loading && <TodoContentLoader/>}
                
                {!loading && 

                    <>

                        <TodoHeader
                            searchValue={searchValue} 
                            setSearchValue={setSearchValue}
                            todos={todos}
                        >

                            <TodoCounter/>
                            <TodoSearch/>

                        </TodoHeader>

                        {!todos.length && <p className='empty-state-text'>Create your first <span>Task!</span></p>}
                        {(!filteredTodos.length && !!todos.length) && <p className='empty-state-text'>None of your <span>Tasks</span> matches: <br/> 🔎<i> '{searchValue}'.</i></p>}

                        <TodoList
                        
                            loading={loading}
                            // /* ----OPTION 1---------- TodoItems rendered with render props ------------------- */
                            onRender={filteredTodos.map(todo => 
                                <TodoItem 
                                    text={todo.text} 
                                    key={todo.text} 
                                    completed={todo.completed}
                                    updateTodoStatus={() => updateTodoStatus(todo.text)}
                                    deleteTodoItem={() => deleteTodoItem(todo.text)}
                                />
                            )}
                        >
                            

                            {/* ----OPTION 2---------- TodoItems rendered as children -------------------*/}
                            {/* {filteredTodos.map(todo => 
                                <TodoItem 
                                    text={todo.text} 
                                    key={todo.text} 
                                    completed={todo.completed}
                                    updateTodoStatus={() => updateTodoStatus(todo.text)}
                                    deleteTodoItem={() => deleteTodoItem(todo.text)}
                                />
                            )} */}

                        </TodoList>

                        <CreateTodoButton modalOpenState={modalOpenState} setModalOpenState={setModalOpenState}/>
                    </>
                }

            </main>

        </>
    );
}

export default App;
