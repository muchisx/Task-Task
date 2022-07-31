import React from 'react';
import './TodoHeader.css'

const TodoHeader = ({children, todos, searchValue, setSearchValue}) => {

    // Passing down props to children via React.Children + React.cloneElement
    const clonedChildren = React.Children
                            .toArray(children)
                            .map(child => React.cloneElement(child, {todos, searchValue, setSearchValue}))

    return (
        <header className='todo-header-container'>
            {clonedChildren}
        </header>
    );
}

export default TodoHeader;
