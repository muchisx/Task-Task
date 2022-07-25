import React from 'react';
import "./TodoSearch.css"

const TodoSearch = ({searchValue, setSearchValue}) => {

    const filterTodoItems = (e) => {

        setSearchValue(e.target.value)        

        console.log(e.target.value);
        console.log('filtering TodoItems');
    }

    return (
        <input 
        className="todo-search" 
        type="text" 
        placeholder="🔎 Filter"
        value={searchValue}
        onChange={filterTodoItems}
        />
    );
}

export default TodoSearch;
