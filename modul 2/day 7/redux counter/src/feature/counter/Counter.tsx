import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByamount } from "./counterSlice";

function counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>nambah 1</button>
      <button onClick={() => dispatch(decrement())}>kurang 1</button>
      <button onClick={() => dispatch(incrementByamount(5))}>nambah 5</button>
    </div>
  );
}

export default counter;
