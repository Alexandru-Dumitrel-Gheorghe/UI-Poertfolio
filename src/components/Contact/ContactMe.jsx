import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiMiro, SiFigma } from "react-icons/si";
import styles from "./ContactMe.module.css";

// Funcție pentru descărcarea CV-ului
const handleCVDownload = () => {
  window.open("/ui/Lebenslauf.pdf", "_blank");
};



// Funcție pentru butonul "Projekten" (exemplu)
const handleProjectsClick = () => {
  // De exemplu, poți să faci scroll către o secțiune de proiecte
  // sau să navighezi către o altă pagină:
  console.log("Navigare către secțiunea de proiecte!");
};

function ContactMe() {
  return (
    <section className={styles.contactSection}>
      {/* Bara de sus cu "Kontakt" */}
      <div className={styles.topBar}>
        <div className={styles.leftHeader}>Kontakt</div>
      </div>

      {/* Conținutul central */}
      <div className={styles.mainContent}>
        <div className={styles.centerText}>
          <h2 className={styles.scriptText}>Let’s work</h2>
          <h1 className={styles.boldText}>TOGETHER</h1>
        </div>
        {/* Subtitlu */}
        <p className={styles.subTitle}>
          Front-End Web Developer / UI/UX Designer
        </p>

        {/* Grupul de butoane: Projekten și Lebenslauf */}
        <div className={styles.buttonGroup}>
          <button className={styles.projectButton} onClick={handleProjectsClick}>
            Projekten
          </button>
          <button className={styles.cvButton} onClick={handleCVDownload}>
            Lebenslauf📄
          </button>
        </div>
      </div>

      {/* Bara de jos cu informațiile de contact și link-urile */}
      <div className={styles.bottomBar}>
        <div className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span>+49 1577 2158264</span>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span>gheorghe.93@icloud.com</span>
        </div>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Fürstenfeldbruck, Deutschland</span>
        </div>
        <div className={styles.contactItem}>
          <FaUser className={styles.icon} />
          <span>32 Jahre</span>
        </div>

        {/* Iconițe Social Media */}
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/Alexandru-Dumitrel-Gheorghe"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://miro.com" target="_blank" rel="noreferrer">
            <SiMiro />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://figma.com" target="_blank" rel="noreferrer">
            <SiFigma />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
