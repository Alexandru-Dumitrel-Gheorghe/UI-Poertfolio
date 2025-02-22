import React from "react";
import styles from "./WeddingPhotography.module.css";

const WeddingPhotography = () => {
  return (
    <section className={styles.weddingSection}>
      {/* Container care limitează lățimea și centrează pe orizontală */}
      <div className={styles.containerWedding}>

        {/* Titlul mare */}
        <h1 className={styles.mainTitle}>
          Wedding <br />
          Photography
        </h1>

        {/* Laptopul de jos */}
        <img
          src="/ui/laptop-wedding1.png"
          alt="Laptop mic"
          className={styles.laptopLeft}
        />

        {/* Laptopul de sus */}
        <img
          src="/ui/laptop-wedding.png"
          alt="Laptop mare"
          className={styles.laptopRight}
        />

        {/* Bloc cu descriere, liste, butoane */}
        <div className={styles.infoBlock}>
          <p className={styles.description}>
            Eine Website für Hochzeitsfotografie-Dienstleistungen mit Portfolios,
            Leistungspaketen und Kundenbewertungen.
          </p>
          <div className={styles.listsContainer}>
            <div>
              <h3>Technologien:</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <h3>Funktionen:</h3>
              <ul>
                <li>Responsives Design</li>
                <li>Interaktive Galerie</li>
                <li>Kontaktformular</li>
                <li>Servicepakete</li>
              </ul>
            </div>
          </div>

          {/* Butoane */}
          <div className={styles.buttonsRow}>
            <a
              href="https://aleks-nikolic.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWebsite}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGithub}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPhotography;
