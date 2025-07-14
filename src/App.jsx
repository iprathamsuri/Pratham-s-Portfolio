import React, { useState, useEffect } from "react";
import Navbar from "./assets/Navbar";
import HeroSection from "./assets/HeroSection";
import TechStack from "./assets/TechStack";
import Project from "./assets/Project";
import Experience from "./assets/Experience";
import Footer from "./assets/Footer";

import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <HeroSection />
      <TechStack />
      <Project />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
