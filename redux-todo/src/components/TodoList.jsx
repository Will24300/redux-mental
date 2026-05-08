import {  useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state)=> state.todo.items)

  if (todos.length === 0) {
    return <p className="empty-state">No todos yet. Add one above.</p>;
  }

  return (
    <ul className="todo-list">
     
        <TodoItem
       
        />
     
    </ul>
  );
}

export default TodoList;
