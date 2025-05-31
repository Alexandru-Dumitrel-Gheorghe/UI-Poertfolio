// src/App.js
import React from "react";
import "./App.css";

// Importă fișierul de configurare i18n
import "./i18n";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import TitleProject from "./components/TitleProject/TitleProject";
import Education from "./components/Education/Education";
import ContactMe from "./components/Contact/ContactMe";
import GitHubProjects from "./components/GitHub/GitHubProjects";
import Footer from "./components/Footer/Footer";
import ProjectsShowcase from "./components/ProjectsShowcase/ProjectsShowcase";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TitleProject />
      <ProjectsShowcase />

      <Education />
      <GitHubProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
