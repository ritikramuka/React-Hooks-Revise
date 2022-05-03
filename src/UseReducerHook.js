import React, {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showText: state.showText };
    case "TOGGLE_SHOW_TEXT":
      return { counter: state.counter, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [myState, dispatch] = useReducer(reducer, {
    counter: 0,
    showText: true,
  });
  return (
    <div>
      <h1>{myState.counter}</h1>
      <button onClick={() => {
          dispatch({type: "INCREMENT"});
          dispatch({type: "TOGGLE_SHOW_TEXT"});
      }}>Click Here</button>
      {myState.showText && <p>This is some text...</p>}
    </div>
  );
};

export default UseReducerHook;
