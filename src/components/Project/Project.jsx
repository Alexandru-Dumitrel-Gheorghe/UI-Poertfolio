import React from "react";
import styles from "./Project.module.css";

function Project() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Coloana stângă */}
        <div className={styles.leftColumn}>
          <div className={styles.laptop1Container}>
            <img
              src="/ui/laptop-tetris1.png"
              alt="Laptop Tetris 1"
              className={styles.laptopImage}
            />
          </div>

          <div className={styles.textSection}>
            <p className={styles.description}>
              Ein klassisches Tetris-Spiel mit React. Ordnen Sie fallende Tetrominos so an,
              dass ganze Reihen entstehen, um Punkte zu sammeln.
            </p>

            <div className={styles.listsWrapper}>
              <div className={styles.technologies}>
                <h3>Technologien:</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React</li>
                </ul>
              </div>
              <div className={styles.features}>
                <h3>Funktionen:</h3>
                <ul>
                  <li>Mehrere Level</li>
                  <li>Steigende Geschwindigkeit</li>
                  <li>Responsives Design</li>
                  <li>Intuitive Steuerung</li>
                  <li>Soundeffekte</li>
                </ul>
              </div>
            </div>

            {/* Butoane sub text */}
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
        </div>

        {/* Coloana dreaptă */}
        <div className={styles.rightColumn}>
          <h1 className={styles.title}>TETRIS GAME</h1>

          <div className={styles.laptop2Container}>
            <img
              src="/ui/laptop-tetris.png"
              alt="Laptop Tetris 2"
              className={styles.laptopImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
