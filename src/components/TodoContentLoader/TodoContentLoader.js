import React from 'react'
import './TodoContentLoader.css'



const TodoContentLoader = (props) => {
  return (
    <>
    <div className='todo-counter todo-counter-skeleton'></div>
    <div className='todo-search todo-search-skeleton'></div>
    <div className='todo-list todo-list-skeleton'>
        <div className='todo-item todo-item-skeleton'></div>
        <div className='todo-item todo-item-skeleton'></div>
        <div className='todo-item todo-item-skeleton'></div>
        <div className='todo-item todo-item-skeleton'></div>
    </div>
    </>
  )
}

export default TodoContentLoader