import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import LatestNews from "./Pages/LatestNews";
import Membership from "./Pages/Membership";
import Gallery from "./Pages/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <LatestNews />
      <Membership />
      <Gallery />
    </>
  );
}

export default App;
