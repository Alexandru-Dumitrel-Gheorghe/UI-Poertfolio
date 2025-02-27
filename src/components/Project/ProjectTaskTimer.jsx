import React from "react";
import styles from "./ProjectTaskTimer.module.css";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function ProjectTaskTimer() {
  return (
    <section id="task-timer" className={styles.taskTimerSection}>
      <div className={styles.container}>
        {/* Left Column: Text and information */}
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Task Timer</h1>
          <p className={styles.description}>
            The Product Timer Dashboard is a web application that helps you track the time spent on various tasks. The front-end uses <strong>React</strong> and <strong>CSS Modules</strong>, while the back-end uses <strong>Node.js</strong> and <strong>MongoDB</strong>.
          </p>
          <div className={styles.listsContainer}>
            <div className={styles.techSection}>
              <h3 className={styles.sectionTitle}>Technologies:</h3>
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
              <h3 className={styles.sectionTitle}>Features:</h3>
              <ul className={styles.featuresList}>
                <li>Real-time timer: Start, Pause, Stop</li>
                <li>Categories: Sort tasks by categories</li>
                <li>Daily, weekly, and monthly reports</li>
                <li>PDF Export</li>
                <li>Dark Mode</li>
                <li>Responsive design</li>
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

        {/* Right Column: Image */}
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
