import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./TitleProject.module.css";
import { useTranslation } from "react-i18next";

const TitleProject = ({ title, subtitle, scrollToSection }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const targetId = scrollToSection || "task-timer"; // Default la "projects"
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Derulare lină
        block: "start",     // Aliniere la începutul secțiunii
      });
    } else {
      console.log("Secțiunea nu a fost găsită!");
    }
  };

  return (
    <section id="projects" className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>
        {title || t("titleProject.defaultTitle")}
      </h1>
      <p className={styles.subtitle}>
        {subtitle || t("titleProject.defaultSubtitle")}
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
