import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
