import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutSection} id="about">
      {/* Container principal */}
      <div className={styles.aboutContainer}>
        {/* Partea stângă: Conținut text */}
        <div className={styles.leftSide}>
          <h1 className={styles.introTitle}>{t("about.introTitle")}</h1>
          <p className={styles.paragraph}>{t("about.paragraph1")}</p>
          <p className={styles.paragraph}>{t("about.paragraph2")}</p>
          <p className={styles.paragraph}>{t("about.paragraph3")}</p>
        </div>

        {/* Partea dreaptă: Video cu efect tilt */}
        <div className={styles.rightSide}>
          <div className={styles.videoWrapper}>
            <video
              className={styles.cubeVideo}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/ui/introductionvideo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Divider secțiune (opțional) */}
      <div className={styles.sectionDivider}></div>
    </section>
  );
};

export default About;
