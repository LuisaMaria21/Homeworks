// TodoList.jsx
import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="todos">
      <h2>Todos:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
