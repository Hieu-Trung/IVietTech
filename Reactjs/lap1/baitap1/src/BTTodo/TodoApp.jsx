import React, { useState } from 'react'
import FlipMove from 'react-flip-move';
import {FaBeer } from 'react-icons/fa'
const TodoApp = () => {
  const [listTodo, setListTodo] = useState([]);
  const [todo, setTodo] = useState("")

  const handleAddTodo = (e) => {
    e.preventDefault(); // ngăn chặn việc load trang khi submit
    setListTodo([...listTodo, todo]);
    e.target.reset() //reset value ở input sau khi submit về null
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className='wrapper'>
      <div className='task-input'>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={handleChange}
          />
        </form>
      </div> <div className='controls'>
        <div className='filters'>
          <span>All</span>
          <span>Pending</span>
          <span>Completed</span>
        </div>
        <button className='clear-btn'>Clear all</button>
      </div>
      <ul className="task-box">
        <FlipMove>
          {listTodo.map((item, index) => (
            <li key={index}>
              <input type='checkbox'/>
              {item}
              <FaBeer />
            </li>
          ))}
        </FlipMove>
      </ul>
    </div>
  )
}

export default TodoApp