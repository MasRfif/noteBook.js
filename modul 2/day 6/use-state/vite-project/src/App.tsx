import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  console.log(count);
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        +
      </button>

      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </>
  );
}

export default App;
