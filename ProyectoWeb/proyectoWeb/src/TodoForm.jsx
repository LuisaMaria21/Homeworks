import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [todoText, setTodoText] = useState("");

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            addTodo({
                id: Date.now(),
                text: todoText.trim(),
                completed: false,
            });
            setTodoText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add Todo"
                    aria-label="Add Todo"
                    value={todoText}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
