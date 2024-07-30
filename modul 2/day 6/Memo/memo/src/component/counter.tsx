import { useState } from "react";
import Decoration from "./Decoration";

function Counter() {
  const [count, setCount] = useState(0);
  console.info("Counter");
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <Decoration />
    </>
  );
}

export default Counter;
