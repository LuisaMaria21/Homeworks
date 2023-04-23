import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <li>
            <span onClick={() => onToggle(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                {todo.title}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
