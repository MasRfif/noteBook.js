import { useContext } from "react";
import { NameContext } from "../App";

function Header() {
  const name = useContext(NameContext);
  const firstname = name.split(" ")[0];
  return (
    <header>
      <h1>Logo</h1>
      <p>Hello, {name}</p>
    </header>
  );
}

export default Header;
