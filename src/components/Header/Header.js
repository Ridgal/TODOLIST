import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import './Header.css';

const Header = ({ todos, setTodos }) => {
  return (
    <div className="header">
      <h1 className="title">todos</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
    </div>
  )
};

export default Header;