import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import WeddingPhotography from "./components/WeddingPhotography/WeddingPhotography";
import TitleProject from "./components/TitleProject/TitleProject";
import Project from "./components/Project/Project";
import ProjectTaskTimer from "./components/Project/ProjectTaskTimer";
import Education from "./components/Education/Education";
import ContactMe from "./components/Contact/ContactMe";
import ChatBot from "./components/ChatBot/ChatBot";  // Importul ChatBot
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TitleProject />
      <WeddingPhotography />
      <Project />
      <ProjectTaskTimer />
      <Education />
      <ContactMe />
      <ChatBot />
      <ScrollToTop />
    </div>
  );
}

export default App;
