// TodoList.jsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: false },
    { id: 3, title: "Deploy the App", completed: false },
  ]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
