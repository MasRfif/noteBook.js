import { useState } from "react";

function useCounter(val: number, step: number) {
  const [count, setState] = useState(val);

  function increment() {
    setState(count + step);
  }

  function decrement() {
    setState(count - step);
  }

  function perkalian() {
    setState(count * step);
  }

  return [count, increment, decrement, perkalian];
}

export default useCounter;
