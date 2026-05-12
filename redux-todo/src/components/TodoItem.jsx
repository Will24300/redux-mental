import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos";

function TodoItem() {
  const todos = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <li
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          key={todo.id}
        >
          <label className="todo-checkbox">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span className="checkmark"></span>
          </label>
          <span className="todo-text">{todo.text}</span>
          <button
            className="delete-btn"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            ✕
          </button>
        </li>
      ))}
    </>
  );
}

export default TodoItem;
