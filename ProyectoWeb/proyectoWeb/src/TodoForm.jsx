// TodoForm.jsx
import React, { useState } from "react";

const TodoForm = ({ onNewTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTodo({
      title,
      completed: false,
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Todo:</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
