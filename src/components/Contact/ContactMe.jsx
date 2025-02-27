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

// Function to download the CV
const handleCVDownload = () => {
  window.open("/ui/Lebenslauf.pdf", "_blank");
};

// Function for "Projekten" button (example)
const handleProjectsClick = () => {
  console.log("Navigating to projects section!");
};

function ContactMe() {
  return (
    <section className={styles.contactSection}>
      {/* Top bar with "Kontakt" */}
      <div className={styles.topBar}>
        <div className={styles.leftHeader}>Kontakt</div>
      </div>

      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.centerText}>
          <h2 className={styles.scriptText}>Let’s work</h2>
          <h1 className={styles.boldText}>TOGETHER</h1>
        </div>
        {/* Subtitle */}
        <p className={styles.subTitle}>
          Front-End Web Developer / UI/UX Designer
        </p>

        {/* Button group: Projekten and Lebenslauf */}
        <div className={styles.buttonGroup}>
          <button className={styles.projectButton} onClick={handleProjectsClick}>
            Projekten
          </button>
          <button className={styles.cvButton} onClick={handleCVDownload}>
            Lebenslauf📄
          </button>
        </div>
      </div>

      {/* Bottom bar with contact information and links */}
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

        {/* Social media icons */}
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
