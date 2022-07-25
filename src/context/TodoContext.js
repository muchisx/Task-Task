import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

const defaultTodos = [
    { text: 'These are example tasks!', completed: false },
    { text: '<- Complete a task here', completed: false },
    { text: 'Delete a task here ->', completed: false },
]


const TodoProvider = (props) => {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', defaultTodos)
    const [searchValue, setSearchValue] = React.useState('');
    const [modalOpenState, setModalOpenState] = React.useState(false);

    let filteredTodos = [];

    if (!searchValue) filteredTodos = todos;
    else {
        filteredTodos = todos.filter(todo => {

        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
        })
    }
    
    const updateTodoStatus = (todoText) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const updatedTodos = [...todos];
        
        updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
        
        saveTodos(updatedTodos)
    }
    
    const addTodoItem = (todoText) => {
        
        const updatedTodos = [...todos];

        updatedTodos.push({
            text: todoText,
            completed: false,
        })

        saveTodos(updatedTodos)
    }
    
    const deleteTodoItem = (todoText) => {
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const updatedTodos = [...todos];
 
        updatedTodos.splice(todoIndex, 1)

        saveTodos(updatedTodos)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            searchValue,
            setSearchValue,
            filteredTodos,
            updateTodoStatus,
            addTodoItem,
            deleteTodoItem,
            modalOpenState,
            setModalOpenState,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };