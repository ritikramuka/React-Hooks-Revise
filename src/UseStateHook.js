import React, { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Write Something here....");

  let increment = () => {
    setCounter(counter + 1);
  };

  let decrement = () => {
    setCounter(counter - 1);
  };

  let updateInput = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div>
        {counter}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
          <input placeholder={inputValue} onChange={updateInput}></input>
          {inputValue}
      </div>
    </div>
  );
};

export default UseStateHook;
