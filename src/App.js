import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import WeddingPhotography from "./components/WeddingPhotography/WeddingPhotography";
import Project from "./components/Project/Project";
import ProjectTaskTimer from "./components/Project/ProjectTaskTimer";
import Education from "./components/Education/Education";
import ContactMe from "./components/Contact/ContactMe";
// ... alte importuri

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WeddingPhotography />
      <Project />
      <ProjectTaskTimer />
      <Education />
      <ContactMe />
      {/* Alte secțiuni: Projects, Contact etc. */}
    </div>
  );
}

export default App;
