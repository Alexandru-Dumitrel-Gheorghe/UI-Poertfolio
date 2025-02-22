import React from "react";
import styles from "./ProjectTaskTimer.module.css";

function ProjectTaskTimer() {
  return (
    <div className={styles.container}>
      {/* Coloana stângă */}
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>Task Timer</h1>
        <p className={styles.description}>
          Das Product Timer Dashboard ist eine Webanwendung, die Ihnen hilft,
          die Zeit für verschiedene Aufgaben zu verfolgen. Verwendet React,
          CSS Modules, Node.js und MongoDB.
        </p>

        {/* Imaginea large / lată, situată sub text */}
        <img
          src="/ui/tasktimer1.png"
          alt="Task Timer Dashboard"
          className={styles.imageLeft}
        />
      </div>

      {/* Coloana dreaptă */}
      <div className={styles.rightColumn}>
        {/* Imaginea cu „Konto Erstellen” (dreapta-sus) */}
        <img
          src="/ui/tasktimer.png"
          alt="Konto Erstellen"
          className={styles.imageRight}
        />

        {/* Lista de funcționalități (dreapta-jos) */}
        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>Funktionen:</h2>
          <ul className={styles.featuresList}>
            <li>Echtzeit-Timer: Start, Pause, Stopp</li>
            <li>Kategorien: Aufgaben nach Kategorien sortieren</li>
            <li>Tägliche, wöchentliche und monatliche Berichte</li>
            <li>PDF-Export</li>
            <li>Dark Mode</li>
            <li>Responsives Design</li>
          </ul>
        </div>

        {/* Butoane Live Demo și GitHub */}
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
      
    </div>
  );
}

export default ProjectTaskTimer;
