import useCounter from "./hook/useCounter";
import "./App.css";

function App() {
  const [angka, plus, minus, kali] = useCounter(7, 17);

  return (
    <>
      <h1 style={{ margin: "24px" }}>{angka}</h1>
      <button onClick={plus}>nambah</button>
      <button onClick={minus}>ngurang</button>
      <button onClick={kali}>kali</button>
    </>
  );
}

export default App;
