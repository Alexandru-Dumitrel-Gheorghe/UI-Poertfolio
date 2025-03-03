import React from "react";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle CV download
  const handleCVDownload = () => {
    window.open("/ui/Lebenslauf.pdf", "_blank");
  };

  // Current date in German (e.g., "Januar 2025")
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background video */}
      <video 
        className={styles.backgroundVideo} 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/ui/introductionvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated gradient overlay */}
      <div className={styles.gradientOverlay}></div>

      <div className={styles.heroContainer}>
        {/* Top left corner */}
        <div className={`${styles.topLeft} ${styles.fadeInLeft}`}>
          <h2>
            {t("hero.frontend")} <br />
            {t("hero.uiux")}
          </h2>
        </div>

        {/* Top right corner */}
        <div className={`${styles.topRight} ${styles.fadeInRight}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: t("hero.nameAndDate", { date: formattedDate }),
            }}
          />
        </div>

        {/* Central content */}
        <div className={`${styles.centerContent} ${styles.fadeInUp}`}>
          <div className={styles.imageWrapper}>
            {/* Animated pulse ring */}
            <span className={styles.pulseRing}></span>
            <img
              src="/ui/profil.jpg"
              alt={t("hero.profileAlt")}
              className={styles.profileImage}
            />
          </div>

          <h1 className={styles.title}>{t("hero.title")}</h1>
          <p className={styles.tagline}>{t("hero.tagline")}</p>
          <p className={styles.description}>{t("hero.description")}</p>
          <div className={styles.buttonGroup}>
            <button className={styles.projectButton} onClick={handleProjectsClick}>
              {t("hero.projectsButton")}
            </button>
            <button className={styles.cvButton} onClick={handleCVDownload}>
              {t("hero.cvButton")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
