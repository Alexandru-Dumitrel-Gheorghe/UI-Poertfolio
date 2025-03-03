import React from "react";
import styles from "./Project.module.css";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();

  return (
    <section className={styles.projectSection}>
      <div className={styles.projectContent}>
        {/* Coloana stângă (Text) */}
        <div className={styles.left}>
          <h2 className={styles.title}>{t("projectTetris.title")}</h2>
          <p className={styles.description}>
            {t("projectTetris.description")}
          </p>

          <div className={styles.lists}>
            <div className={styles.technologies}>
              <h3>{t("projectTetris.technologies")}</h3>
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
              <h3>{t("projectTetris.features")}</h3>
              <ul>
                <li>{t("projectTetris.bulletPoints.multipleLevels")}</li>
                <li>{t("projectTetris.bulletPoints.increasingSpeed")}</li>
                <li>{t("projectTetris.bulletPoints.responsiveDesign")}</li>
                <li>{t("projectTetris.bulletPoints.intuitiveControls")}</li>
                <li>{t("projectTetris.bulletPoints.soundEffects")}</li>
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
              {t("projectTetris.liveDemoButton")}
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {t("projectTetris.githubButton")}
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
