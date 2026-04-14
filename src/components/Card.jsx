import { createContext, useEffect, useState } from "react";
import Card, { Button as Armen } from "./components/Card";
import { Route, Routes } from "react-router-dom/dist/index.d.mts";
import Home from "./components/Card";
import Profile from "./pages/Home";
import "./Card.css";

function Card({ children, text }) {
  return (
    <div className="card">
      <h2>{text}</h2>
      <div>{children}</div>
    </div>
  );
}

export const ImContext = createContext();
function App() {

  let user = {
    name: `Harutyun`,
    surname: `Simonyan`,
  };

  const [data, setData] = useState(user);

  return (
    <div>
      <ImContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home/>} />
        </Routes>
      </ImContext.Provider>
    </div>
  );
}

export default App;