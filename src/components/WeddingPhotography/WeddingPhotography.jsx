import React from "react";
import styles from "./WeddingPhotography.module.css";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

const WeddingPhotography = () => {
  return (
    <section id="WeddingPhotography" className={styles.weddingSection}>
      <div className={styles.containerWedding}>
        {/* Left Column: Image with clip-path effect */}
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

        {/* Right Column: Asymmetric text */}
        <div className={styles.right}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              Wedding <br />
              Portfolio
            </h1>
            <p className={styles.description}>
              A website for wedding photography services with portfolios,
              service packages, and customer reviews.
            </p>
            <div className={styles.listsContainer}>
              <div className={styles.listGroup}>
                <h3>Technologies:</h3>
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
                <h3>Features:</h3>
                <ul>
                  <li>Responsive Design</li>
                  <li>Interactive Gallery</li>
                  <li>Contact Form</li>
                  <li>Service Packages</li>
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
