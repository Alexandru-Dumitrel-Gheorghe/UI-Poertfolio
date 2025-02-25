import React from "react";
import styles from "./Project.module.css";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

function Project() {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectContent}>
        {/* Coloana stângă (Text) */}
        <div className={styles.left}>
          <h2 className={styles.title}>Tetris Game</h2>
          <p className={styles.description}>
            Ein klassisches Tetris-Spiel mit React. Ordnen Sie fallende Tetrominos
            so an, dass ganze Reihen entstehen, um Punkte zu sammeln.
          </p>

          <div className={styles.lists}>
            <div className={styles.technologies}>
              <h3>TECHNOLOGIEN</h3>
              <ul>
                <li>
                  <FaJsSquare className={styles.icon} />
                  JavaScript
                </li>
                <li>
                  <FaHtml5 className={styles.icon} />
                  HTML5
                </li>
                <li>
                  <FaCss3Alt className={styles.icon} />
                  CSS3
                </li>
                <li>
                  <FaReact className={styles.icon} />
                  React
                </li>
              </ul>
            </div>
            <div className={styles.features}>
              <h3>FUNKTIONEN</h3>
              <ul>
                <li>Mehrere Level</li>
                <li>Steigende Geschwindigkeit</li>
                <li>Responsives Design</li>
                <li>Intuitive Steuerung</li>
                <li>Soundeffekte</li>
              </ul>
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <a
              href="https://tetris-alex93.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Coloana dreaptă (Imagine laptop) */}
        <div className={styles.right}>
          <div className={styles.laptopContainer}>
            <img
              src="/ui/laptop-tetris.png"
              alt="Laptop Tetris"
              className={styles.laptopImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
