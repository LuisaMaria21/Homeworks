import { useState } from "react";

export const useTodo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { text, isCompleted: false }]);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleCompleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const countTodos = () => todos.length;

    const countPendingTodos = () => todos.filter(todo => !todo.isCompleted).length;

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleCompleteTodo,
        countTodos,
        countPendingTodos
    };
};
