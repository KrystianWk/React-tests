import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <p>Aktualna wartość licznika: {count}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ</button>
      <button onClick={() => setCount(count - 1)}>Zmniejsz</button>
      <button onClick={() => setCount(0)}>Resetuj</button>
    </div>
  );
}

export default Counter;
