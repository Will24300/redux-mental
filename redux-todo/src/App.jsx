import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state)=> state.todo.items)
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Todos</h1>
          <p className="subtitle">Stay on track</p>
        </header>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-num">{total}</span>
            <span className="stat-text">Total</span>
          </div>
          <div className="stat">
            <span className="stat-num pending">{pending}</span>
            <span className="stat-text">Pending</span>
          </div>
          <div className="stat">
            <span className="stat-num done">{completed}</span>
            <span className="stat-text">Done</span>
          </div>
        </div>

        <TodoInput  />
        <TodoList
          
        />
      </div>
    </div>
  );
}

export default App;
