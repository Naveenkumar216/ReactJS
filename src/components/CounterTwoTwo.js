import React from "react";
import useCounter from "../hooks/useCounter";

function CounterTwoTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Rest</button>
    </div>
  );
}

export default CounterTwoTwo;
