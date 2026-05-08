import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText("")
  };
  

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
