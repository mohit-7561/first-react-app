import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    let incre = {
      type: "INCREMENT",
    };
    dispatch(incre);
  };

  const decrement = () => {
    let decre = {
      type: "DECREMENT",
    };
    dispatch(decre);
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  );
};

export default UseReducer;
