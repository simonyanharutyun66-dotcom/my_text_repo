import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom/dist/index.d.mts";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css"; 
// ... inside the return
<div className="app-container">
  <nav>
    <a href="/">Home</a>
    <a href="/profile">Profile</a>
  </nav>
  <ImContext.Provider value={{ data, setData }}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
     </Routes>
  </ImContext.Provider>
</div>

export const ImContext = createContext();

function App() {
  const [data, setData] = useState({
    name: "Armen",
    surname: "Gharibyan",
  });

  return (
    <ImContext.Provider value={{ data, setData }}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </ImContext.Provider>
  );
}

export default App;