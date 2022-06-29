import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({ todos, setTodos, status }) => {

  const deleteTodo = (id) => {
    const newTodo = [...todos].filter(item => (item.id !== id))
    setTodos(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = [...todos].filter( item => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setTodos(newTodo); 
  };

  return (
    <section className="main">
        <ul className="todo-list">
        {todos.map(item => {
          if (status !== 'all') {
            if (status !== 'active' && !item.status) {
              return null
            }
            if (status !== 'completed' && item.status) {
              return null
            }
          }
          return (
            <TodoItem key={item.id} data={item} statusTodo={statusTodo} deleteTodo={deleteTodo} />
          )
        })}
          </ul>
    </section>
  )
};

export default TodoList;