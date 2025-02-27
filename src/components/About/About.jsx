import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      {/* Main container */}
      <div className={styles.aboutContainer}>
        {/* Left side: Text content */}
        <div className={styles.leftSide}>
          <h1 className={styles.introTitle}>Introduction</h1>

          <p className={styles.paragraph}>
            Hallo! Ich bin Alexandru, ein leidenschaftlicher Front-End Developer
            mit einem Auge für UI/UX. Ich liebe es, moderne und ansprechende
            Weboberflächen zu gestalten und neue Technologien auszuprobieren.
          </p>

          <p className={styles.paragraph}>
            In meiner Freizeit genieße ich das Lernen neuer Frameworks, das
            Experimentieren mit Design-Tools und die Teilnahme an
            Entwickler-Communities. Dabei lege ich großen Wert auf
            benutzerfreundliche, effiziente und ästhetisch ansprechende Lösungen,
            die das digitale Erlebnis für alle verbessern.
          </p>

          <p className={styles.paragraph}>
            Mein Ziel ist es, Webseiten und Anwendungen zu schaffen, die nicht
            nur funktional, sondern auch inspirierend sind. Ich glaube daran,
            dass Technologie Menschen zusammenbringt und Innovation fördert.
          </p>
        </div>

        {/* Right side: Video with tilt effect */}
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

      {/* Section divider (optional) */}
      <div className={styles.sectionDivider}></div>
    </section>
  );
};

export default About;
