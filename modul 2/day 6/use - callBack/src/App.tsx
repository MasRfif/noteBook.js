import "./App.css";

import { useState } from "react";
import Mega from "./component/Mega";

function App() {
  const [count, setCount] = useState(0);

  const handleBoost = useCallback(() => {
    setCount(() => count + 10);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>small</button>
      <Mega handleClick={handleBoost} />
    </>
  );
}

export default App;
