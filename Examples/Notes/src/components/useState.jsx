import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button> <br />
      <button onClick={decrement}>DECREMENET</button>
    </>
  );
};

export default UseState;
