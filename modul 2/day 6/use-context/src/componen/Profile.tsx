import { useContext } from "react";
import { NameContext } from "../App";
function Profile() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>{name}</h1>
      <p>Your Quot's </p>
    </div>
  );
}

export default Profile;
