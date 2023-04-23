import './App.css'
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useTodo } from './useTodo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodo();

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo !== '') {
      addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      });
      setNewTodo('');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">TODO List</h1>
      <div className="row">
        <div className="col-md-6">
          <TodoForm newTodo={newTodo} handleNewTodo={handleNewTodo} handleAddTodo={handleAddTodo} />
        </div>
        <div className="col-md-6">
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          <div className="text-center mt-3">
            <p>Total todos: {countTodos}</p>
            <p>Pending todos: {countPendingTodos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

