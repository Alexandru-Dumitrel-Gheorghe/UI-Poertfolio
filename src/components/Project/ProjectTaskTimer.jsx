import React from "react";
import styles from "./ProjectTaskTimer.module.css";

function ProjectTaskTimer() {
  return (
    <div className={styles.pageWrapper}>
      {/* Secțiunea HERO */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Task Timer</h1>
            <p className={styles.description}>
              Das Product Timer Dashboard ist eine Webanwendung, die Ihnen hilft,
              die Zeit für verschiedene Aufgaben zu verfolgen. Verwendet React,
              CSS Modules, Node.js und MongoDB.
            </p>
          </div>
          <div className={styles.heroImageWrapper}>
            <img
              src="/ui/tasktimer1.png"
              alt="Task Timer Dashboard"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* Secțiunea FEATURES */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresImageWrapper}>
            <img
              src="/ui/tasktimer.png"
              alt="Konto Erstellen"
              className={styles.featuresImage}
            />
          </div>
          <div className={styles.featuresListWrapper}>
            <h2 className={styles.featuresTitle}>Funktionen</h2>
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
      </section>

      {/* Secțiunea CTA */}
      <section className={styles.ctaSection}>
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
      </section>
    </div>
  );
}

export default ProjectTaskTimer;
