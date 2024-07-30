import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const users = useSelector((state) => state.users);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/users">Users ({users.length})</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
