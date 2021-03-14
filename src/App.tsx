import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
