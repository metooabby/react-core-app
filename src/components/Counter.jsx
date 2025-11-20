import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-500 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-400">Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
