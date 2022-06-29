import { useState, useEffect } from "react";
import './TodoFilter.css'

const TodoFilter = ({ todos, setTodos, status, setStatus }) => {
  
  const [todosCounter, setTodosCounter] = useState(0);

  const [isItemCompleted, setIsItemCompleted] = useState(true);
  
  useEffect(() => {
    setTodosCounter(todos.filter(item => !item.completed).length);
    setIsItemCompleted(todos.some(item => item.status))
  }, [todos]);
  

  const deleteCompletedTodo = () => {
    const newTodo = todos.filter(item => !item.status)
    setTodos(newTodo)
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todosCounter} items left
        </strong>
      </span>
      <ul className="filters">
        <li>
          <button 
            onClick={ () => {setStatus('all')}} 
            className={status === 'all' ? 'selected' : ''}>All</button>
        </li>
        <li>
          <button
            className={status === 'active' ? 'selected' : ''}
            onClick={ () => {setStatus('active')}}>Active</button>
        </li>
        <li>
          <button
            className={status === 'completed' ? 'selected' : ''}
            onClick={ () => {setStatus('completed')}}>Completed</button>
        </li>
      </ul>
      <button 
        onClick={ () => {deleteCompletedTodo()}}
        className={isItemCompleted ? 'clear-completed' : 'clear-completed-none'}>
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFilter;