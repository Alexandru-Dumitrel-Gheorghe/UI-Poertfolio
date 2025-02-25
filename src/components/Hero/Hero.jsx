import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Data curentă, formatată în limba germană (ex: "Januar 2025")
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });

  return (
    <section id="home" className={styles.heroSection}>
      {/* Videoclipul de fundal */}
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

      {/* Overlay de gradient animat */}
      <div className={styles.gradientOverlay}></div>

      <div className={styles.heroContainer}>
        {/* Colț stânga sus */}
        <div className={`${styles.topLeft} ${styles.fadeInLeft}`}>
          <h2>
            FRONT END WEB DEVELOPER <br />
            UI/UX DESIGNER
          </h2>
        </div>

        {/* Colț dreapta sus */}
        <div className={`${styles.topRight} ${styles.fadeInRight}`}>
          <p>
            Alexandru Gheorghe <br />
            {formattedDate}
          </p>
        </div>

        {/* Conținut central */}
        <div className={`${styles.centerContent} ${styles.fadeInUp}`}>
          <div className={styles.imageWrapper}>
            {/* Inel pulsant animat */}
            <span className={styles.pulseRing}></span>
            <img
              src="/ui/profil.jpg"
              alt="Fotografie Profil"
              className={styles.profileImage}
            />
          </div>

          <h1 className={styles.title}>PORTFOLIO</h1>
          <p className={styles.tagline}>
            Crafting Digital Experiences with Passion and Precision.
          </p>
          <p className={styles.description}>
            Leidenschaft für moderne Webtechnologien und die Erstellung
            benutzerfreundlicher, responsiver Lösungen.
          </p>
          <button className={styles.projectButton} onClick={handleProjectsClick}>
            Zu meinen Projekten
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
