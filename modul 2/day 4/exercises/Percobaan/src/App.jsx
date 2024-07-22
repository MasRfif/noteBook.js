import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="PP-card">
        <div className="PP-image">
          <img src="/path/to/profile.jpg" alt="Profile" />
        </div>
        <div className="PP-info">
          <h2>Naufal Rafif Nurqodri</h2>
          <p>Jakarta, Indonesia</p>
          <p>"Junior Front-end developer."</p>
        </div>
        <div className="Link">
          <button className="Link" href="/">
            GitHub
          </button>
          <button className="Link" href="/">
            Saweria
          </button>
          <button className="Link" href="/">
            LinkedIn
          </button>
          <button className="Link" href="/">
            Twitter
          </button>
          <button className="Link" href="/">
            Instagram
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
