import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.educationSection}>
      {/* Overlay (opțional) */}
      <div className={styles.overlay}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.columns}>
          {/* Coloana stânga */}
          <div className={styles.column}>
            <h2 className={styles.heading}>Webentwicklung, Frontend-Entwicklung</h2>
            <p className={styles.subHeading}>IT School | 2023-2024</p>
            <p className={styles.paragraph}>
              Ich habe als Front-End Web Developer an der IT School umfassende
              Kenntnisse in der Entwicklung benutzerfreundlicher Webseiten
              erworben. Ich beherrsche die Grundlagen von HTML, CSS und
              JavaScript (ES6+) und konnte bereits erste Projekte realisieren.
              Zusätzlich legte ich Wert auf SEO (Suchmaschinenoptimierung) und
              responsives Design, um moderne Webseiten optimal zu gestalten.
            </p>
          </div>

          {/* Coloana dreapta */}
          <div className={styles.column}>
            <h2 className={styles.heading}>UI/UX Design</h2>
            <p className={styles.subHeading}>IT School | 2024 - Heute</p>
            <p className={styles.paragraph}>
              Als UI/UX Designer entwickle ich benutzerzentrierte digitale
              Erlebnisse, die nicht nur funktional, sondern auch ästhetisch
              ansprechend sind. Ich arbeite mit Tools wie Figma, Miro und
              erstelle interaktive Prototypen, um die Benutzeroberfläche zu
              optimieren. Dabei gehören Brainstorming-Sitzungen und
              SEO-Anpassungen ebenso zu meinen Aufgaben.
            </p>
          </div>
        </div>

        {/* Titlu vertical "EDUCATION" pe partea dreaptă */}
        <div className={styles.verticalTitle}>EDUCATION</div>
      </div>
    </section>
  );
};

export default Education;
