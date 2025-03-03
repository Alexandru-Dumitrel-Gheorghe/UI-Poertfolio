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
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Partea de sus a footer-ului */}
      <div className={styles.topFooter}>
        {/* Link-uri de navigație */}
        <nav className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>
            {t("footer.nav.home")}
          </a>
          <a href="#about" className={styles.navLink}>
            {t("footer.nav.about")}
          </a>
          <a href="#skills" className={styles.navLink}>
            {t("footer.nav.skills")}
          </a>
          <a href="#projects" className={styles.navLink}>
            {t("footer.nav.projects")}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t("footer.nav.contact")}
          </a>
        </nav>

        {/* Informații de contact (telefon, email, locație, vârstă) */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>+49 1577 2158264</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <span>gheorghe.a@outlook.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Fürstenfeldbruck, Deutschland</span>
          </div>
          <div className={styles.contactItem}>
            <FaUser className={styles.icon} />
            <span>32 Jahre</span>
          </div>
        </div>

        {/* Link-uri sociale (GitHub, Miro, LinkedIn, Figma) */}
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/Alexandru-Dumitrel-Gheorghe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://miro.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMiro />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFigma />
          </a>
        </div>
      </div>

      {/* Partea de jos a footer-ului (copyright) */}
      <div className={styles.bottomFooter}>
        <p>
          {t("footer.copyright", {
            year: currentYear,
          })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
