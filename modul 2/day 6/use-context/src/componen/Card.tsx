import { useEffect } from "react";

import "./Card.css";
import Button from "./Button";
import Profile from "./Profile";
function Card({ name }: { name: string }) {
  return (
    <div className="Card-box">
      <Profile />
      <Button />
    </div>
  );
}

export default Card;
