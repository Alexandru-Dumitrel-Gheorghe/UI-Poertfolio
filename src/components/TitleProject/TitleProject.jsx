import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./TitleProject.module.css";

const TitleProject = ({ title, subtitle, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(scrollToSection="WeddingPhotography" );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Derulare lină
        block: "start", // Aliniere la începutul secțiunii
      });
    } else {
      console.log("Secțiunea nu a fost găsită!");
    }
  };

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>{title || "MY PROJECTS"}</h1>
      <p className={styles.subtitle}>{subtitle || "Eine Auswahl moderner Projekte"}</p>
      <div
        className={`${styles.arrowContainer} ${isHovered ? styles.arrowHovered : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleScroll} // Clic pe săgeată pentru a derula
      >
        <FaChevronDown className={styles.downArrow} />
      </div>
    </div>
  );
};

export default TitleProject;
