import React from "react";
import styles from "./ProjectTaskTimer.module.css";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function ProjectTaskTimer() {
  return (
    <section className={styles.taskTimerSection}>
      <div className={styles.container}>
        {/* Coloana stângă: Text și informații */}
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Task Timer</h1>
          <p className={styles.description}>
            Das Product Timer Dashboard ist eine Webanwendung, die Ihnen hilft, die Zeit für verschiedene Aufgaben zu verfolgen. Im Front-End kommen <strong>React</strong> und <strong>CSS Modules</strong> zum Einsatz, während im Back-End <strong>Node.js</strong> und <strong>MongoDB</strong> verwendet werden.
          </p>
          <div className={styles.listsContainer}>
            <div className={styles.techSection}>
              <h3 className={styles.sectionTitle}>Technologien:</h3>
              <ul className={styles.techList}>
                <li>
                  <FaReact className={styles.icon} /> React
                </li>
                <li>
                  <FaCss3Alt className={styles.icon} /> CSS Modules
                </li>
                <li>
                  <FaNodeJs className={styles.icon} /> Node.js
                </li>
                <li>
                  <SiMongodb className={styles.icon} /> MongoDB
                </li>
              </ul>
            </div>
            <div className={styles.featuresSection}>
              <h3 className={styles.sectionTitle}>Funktionen:</h3>
              <ul className={styles.featuresList}>
                <li>Echtzeit-Timer: Start, Pause, Stopp</li>
                <li>Kategorien: Aufgaben nach Kategorien sortieren</li>
                <li>Tägliche, wöchentliche und monatliche Berichte</li>
                <li>PDF-Export</li>
                <li>Dark Mode</li>
                <li>Responsives Design</li>
              </ul>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <a
              href="https://task-timerv1.netlify.app/login"
              className={styles.button}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app"
              className={styles.button}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Coloana dreaptă: Imagine */}
        <div className={styles.rightColumn}>
          <img
            src="/ui/task-laptop.png"
            alt="Task Timer Dashboard"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectTaskTimer;
