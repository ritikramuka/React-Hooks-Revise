import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <h1>Todo Application</h1>
      <form>
        <input
          type="text"
          placeholder="Type Something Here..."
          ref={inputRef}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            console.log(inputRef.current.value);
            setTodo([...todo, inputRef.current.value]);
            inputRef.current.value = null;
            console.log(todo);
          }}
        >
          button
        </button>
      </form>
      <ul>
        {todo.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseRefHook;
