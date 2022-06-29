import React from "react";

const TodoItem = ({  data, statusTodo, deleteTodo }) => {
  return (
    <li
      className={ data.status ? 'completed' : '' }>
      <div className="view">
        <input 
          className="toggle"
          id={data.id}
          type="checkbox"
          onChange={ () => statusTodo(data.id)} 
          checked={data.status} />
        <label htmlFor={data.id}>{data.title}</label>
        <button 
          type="button"
          className="closed"
          onClick={ () => deleteTodo(data.id)}>
          </button>
      </div>
    </li>
  )
};

export default TodoItem;