import { useState, useEffect, useMemo } from "react";

import "./App.css";

function App() {
  const [range, setRange] = useState(10);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const allprime = useMemo(() => {
    const result = [];

    for (let counter = 2; counter < range; counter++) {
      if (isPrime(counter)) result.push(counter);
    }
    return result;
  }, [range]);

  return (
    <>
      <p>{String(time)}</p>
      <form>
        <label htmlFor="num">you number:</label>
        <input
          type="number"
          id="num"
          value={range}
          onChange={(event) => setRange(event.target.value)}
        />
      </form>
      <p>
        there {allprime.length} prime(s) between 1 and <br /> {range}
        <span>{allprime.join(", ")}</span>
      </p>
    </>
  );
}

function isPrime(n: number) {
  console.info("isPrime is true");

  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) return true;

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) return false;
  }
  return true;
}

export default App;
