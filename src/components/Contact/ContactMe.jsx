import React from "react";
import { useTranslation } from "react-i18next";
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

// Funcția pentru descărcarea CV-ului
const handleCVDownload = () => {
  window.open("/ui/Lebenslauf.pdf", "_blank");
};

// Funcția pentru butonul "Projekten" (exemplu)
const handleProjectsClick = () => {
  console.log("Navigating to projects section!");
};

function ContactMe() {
  const { t } = useTranslation();

  return (
    <section className={styles.contactSection}>
      {/* Bara de sus cu "Kontakt" */}
      <div className={styles.topBar}>
        <div className={styles.leftHeader}>{t("contact.topBar")}</div>
      </div>

      {/* Conținutul principal */}
      <div className={styles.mainContent}>
        <div className={styles.centerText}>
          <h2 className={styles.scriptText}>{t("contact.letWork")}</h2>
          <h1 className={styles.boldText}>{t("contact.together")}</h1>
        </div>
        {/* Subtitlu */}
        <p className={styles.subTitle}>{t("contact.subtitle")}</p>

        {/* Grupul de butoane: Projekten și Lebenslauf */}
        <div className={styles.buttonGroup}>
          <button
            className={styles.projectButton}
            onClick={handleProjectsClick}
          >
            {t("contact.projectsButton")}
          </button>
          <button className={styles.cvButton} onClick={handleCVDownload}>
            {t("contact.cvButton")}
          </button>
        </div>
      </div>

      {/* Bara de jos cu informații de contact și link-uri */}
      <div className={styles.bottomBar}>
        <div className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span>{t("contact.phone")}</span>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span>{t("contact.email")}</span>
        </div>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>{t("contact.location")}</span>
        </div>
        <div className={styles.contactItem}>
          <FaUser className={styles.icon} />
          <span>{t("contact.age")}</span>
        </div>

        {/* Iconițele social media */}
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
