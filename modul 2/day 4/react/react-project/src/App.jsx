import "./App.css";
import { Header } from "./commponents/Header";
import Profile from "./commponents/profile";

function App() {
  const person = {
    name: "ibnu riski",
    email: "ibnu@gmail.CIA",
  };

  return (
    <>
      <Header />
      <Profile name={person.name} email={person.email} />
    </>
  );
}

export default App;
