import React, { useEffect, useState } from "react";

function OverComplicatedCode({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (count > 1000 || count < -1000) {
      setError("Count is out of allowed range");
    } else {
      setError(null);
    }
    setHistory((prevHistory) => [...prevHistory, count]);
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div>
      <h2>Przekombinowany Kod</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <h3>History:</h3>
      {history.map((val, index) => (
        <p key={index}>{val}</p>
      ))}
    </div>
  );
}

export default OverComplicatedCode;
