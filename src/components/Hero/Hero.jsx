import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Colț stânga sus (Fade In Left) */}
      <div className={`${styles.topLeft} ${styles.fadeInLeft}`}>
        <h2>
          FRONT END WEB DEVELOPER <br />
          UI/UX DESIGNER
        </h2>
      </div>

      {/* Colț dreapta sus (Fade In Right) */}
      <div className={`${styles.topRight} ${styles.fadeInRight}`}>
        <p>
          Alexandru Gheorghe <br />
          Januar / 2025
        </p>
      </div>

      {/* Conținut central (Fade In Up) */}
      <div className={`${styles.centerContent} ${styles.fadeInUp}`}>
        <div className={styles.imageWrapper}>
          {/* Inel pulsant sub imagine */}
          <span className={styles.pulseRing}></span>
          <img
            src="/ui/profil.png"
            alt="Fotografie Profil"
            className={styles.profileImage}
          />
        </div>

        <h1 className={styles.title}>PORTFOLIO</h1>
        <p className={styles.description}>
          Leidenschaft für moderne Webtechnologien und die Erstellung
          benutzerfreundlicher, responsiver Lösungen.
        </p>
        <button className={styles.projectButton} onClick={handleProjectsClick}>
          Zu meinen Projekten
        </button>
      </div>
    </section>
  );
};

export default Hero;
