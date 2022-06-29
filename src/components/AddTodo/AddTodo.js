import { useEffect, useState } from "react";
// import { v4 as uuid } from 'uuid'; {uuid()}
import './AddTodo.css';

const AddTodo = ({ todos, setTodos, status }) => {

  const [value, setValue] = useState('');
  const [defaultChecked, setDefaultChecked] = useState(false);

  useEffect(() => {
    const checked = todos.every(item => item.status === false)
    setDefaultChecked(checked);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (checked) => {
    const inversionStatusTodo = todos.map(item => {
      if (status !== 'all') {
        if (status === 'active' && item.status) {
          return {
            ...item,
            status: checked
          }
        }
        if (status === 'completed' && !item.status) {
          return {
            ...item,
            status: checked
          }
        }
      }
      return {
        ...item,
        status: checked
      }
    });
    setTodos(inversionStatusTodo);
  };

  const saveTodo = () => {
    if (value) {
      setTodos(
        [...todos, {
          id: Date.now(),
          title: value,
          status: false
        }]
      )
      setValue('');
    }
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      saveTodo();
    }
  };
  
  return (
    <div className="addTodo">
      <input type='checkbox' defaultChecked={defaultChecked} className="toggle-all" onChange={ (e) => handleClick(e.target.checked)}/>
      <input 
        className="new-todo"
        placeholder="What needs to be done?" 
        value={value}
        onKeyDown={onKeyDown} 
        onChange={ (e) => setValue(e.target.value)}
        />
    </div>
  )
};

export default AddTodo;