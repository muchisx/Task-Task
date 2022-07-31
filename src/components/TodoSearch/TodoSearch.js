import React from 'react';
import "./TodoSearch.css"

const TodoSearch = ({searchValue, setSearchValue, todos}) => {

    const filterTodoItems = (e) => {

        setSearchValue(e.target.value)        

        console.log(e.target.value);
        console.log('filtering TodoItems');
        console.log(todos);
    }

    return (
        <input 
        className="todo-search" 
        type="text" 
        placeholder="🔎 Filter"
        value={searchValue}
        onChange={filterTodoItems}
        maxLength="20"
        disabled={todos.length ? false : 'disabled'}
        />
    );
}

export default TodoSearch;
