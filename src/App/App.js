import { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import TodoFilter from '../components/Filter/TodoFilter';
import TodoList from '../components/TodoList/TodoList';

import { Container } from 'react-bootstrap';
import './App.css';
import Footer from '../components/Footer.js/Footer';

const App = ({ item }) => {

  const getLocalTodos = () => {
    let tasks = localStorage.getItem('todos');
    if (tasks) {
      return JSON.parse(localStorage.getItem('todos'))
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState(getLocalTodos());
  const [status, setStatus] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);

  return (
    <Container>
      <div className="App">
        <section className='todoapp'>
          <Header todos={todos} setTodos={setTodos}/>
          <TodoList todos={todos} status={status} setTodos={setTodos}/>
          {!!todos.length ? <TodoFilter status={status} todos={todos} setTodos={setTodos} data={item} setStatus={setStatus} /> : null}
        </section>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
