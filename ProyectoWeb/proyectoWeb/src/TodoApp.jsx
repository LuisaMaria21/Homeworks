import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm onNewTodo={handleNewTodo} />
    </div>
  );
};

export default TodoApp;
