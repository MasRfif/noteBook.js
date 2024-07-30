import { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./componen/Header";
import Card from "./componen/Card";

export const NameContext = createContext(" ");
function App() {
  const [name, setName] = useState("Loading...");
  const [commen, setCommend] = useState("Loading...");

  useEffect(() => {
    async function getName() {
      try {
        const responses = await fetch("https://randomuser.me/api");
        const data = await responses.json();
        setName(`${data.results[0].name.first} ${data.results[0].name.last}`);
      } catch (error) {
        console.log(error);
      }
    }
    getName();
  }, []);

  useEffect(() => {
    async function getBody() {
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await responses.json();
        setCommend(`${data.results[0].name}`);
      } catch (error) {
        console.log(error);
      }
    }
    getBody();
  }, []);

  console.log(name);
  return (
    <NameContext.Provider value={name}>
      <Header />
      <Card />
    </NameContext.Provider>
  );
}

export default App;
