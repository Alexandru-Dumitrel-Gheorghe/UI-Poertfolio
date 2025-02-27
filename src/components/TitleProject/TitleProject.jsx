import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./TitleProject.module.css";

const TitleProject = ({ title, subtitle, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const targetId = scrollToSection || "task-timer"; // Default to "projects"
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start",     // Align at the top of the section
      });
    } else {
      console.log("Section not found!");
    }
  };

  return (
    <section id="projects" className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>
        {title || "MY PROJECTS"}
      </h1>
      <p className={styles.subtitle}>
        {subtitle || "A selection of modern projects"}
      </p>
      <div
        className={`${styles.arrowContainer} ${isHovered ? styles.arrowHovered : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleScroll}
      >
        <FaChevronDown className={styles.downArrow} />
      </div>
    </section>
  );
};

export default TitleProject;
