import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>this is footer</footer>
    </>
  );
}

export default App;
