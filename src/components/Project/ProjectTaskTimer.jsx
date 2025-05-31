import React from "react";
import styles from "./ProjectTaskTimer.module.css";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { useTranslation } from "react-i18next";

function ProjectTaskTimer() {
  const { t } = useTranslation();

  return (
    <section id="task-timer" className={styles.taskTimerSection}>
      <div className={styles.container}>
        {/* Left Column: Text and information */}
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>{t("projectTaskTimer.title")}</h1>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: t("projectTaskTimer.description"),
            }}
          />
          <div className={styles.listsContainer}>
            <div className={styles.techSection}>
              <h3 className={styles.sectionTitle}>
                {t("projectTaskTimer.technologies")}
              </h3>
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
              <h3 className={styles.sectionTitle}>
                {t("projectTaskTimer.features")}
              </h3>
              <ul className={styles.featuresList}>
                <li>{t("projectTaskTimer.timer")}</li>
                <li>{t("projectTaskTimer.categories")}</li>
                <li>{t("projectTaskTimer.reports")}</li>
                <li>{t("projectTaskTimer.pdfExport")}</li>
                <li>{t("projectTaskTimer.darkMode")}</li>
                <li>{t("projectTaskTimer.responsiveDesign")}</li>
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
              {t("projectTaskTimer.liveDemoButton")}
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app"
              className={styles.button}
              target="_blank"
              rel="noreferrer"
            >
              {t("projectTaskTimer.githubButton")}
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className={styles.rightColumn}>
          <img
            src="/ui/task-laptop.png"
            alt={t("projectTaskTimer.title")}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectTaskTimer;
