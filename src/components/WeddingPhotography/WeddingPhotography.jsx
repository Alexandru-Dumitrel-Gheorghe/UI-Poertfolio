import React from "react";
import styles from "./WeddingPhotography.module.css";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

const WeddingPhotography = () => {
  return (
    <section id="WeddingPhotography" className={styles.weddingSection}>
      <div className={styles.containerWedding}>
        {/* Coloana stângă: Imagine cu efect de clip-path */}
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <img
              src="/ui/laptop-wedding1.png"
              alt="Laptop Wedding"
              className={styles.laptopImage}
              loading="lazy"
            />
          </div>
        </div>

        {/* Coloana dreaptă: Text asimetric */}
        <div className={styles.right}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              Wedding <br />
              Portfolio
            </h1>
            <p className={styles.description}>
              Eine Website für Hochzeitsfotografie-Dienstleistungen mit Portfolios,
              Leistungspaketen und Kundenbewertungen.
            </p>
            <div className={styles.listsContainer}>
              <div className={styles.listGroup}>
                <h3>Technologien:</h3>
                <ul>
                  <li>
                    <FaJsSquare className={styles.icon} /> JavaScript
                  </li>
                  <li>
                    <FaHtml5 className={styles.icon} /> HTML5
                  </li>
                  <li>
                    <FaCss3Alt className={styles.icon} /> CSS3
                  </li>
                  <li>
                    <SiBootstrap className={styles.icon} /> Bootstrap
                  </li>
                  <li>
                    <FaReact className={styles.icon} /> React
                  </li>
                </ul>
              </div>
              <div className={styles.listGroup}>
                <h3>Funktionen:</h3>
                <ul>
                  <li>Responsives Design</li>
                  <li>Interaktive Galerie</li>
                  <li>Kontaktformular</li>
                  <li>Servicepakete</li>
                </ul>
              </div>
            </div>
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
      </div>
    </section>
  );
};

export default WeddingPhotography;
