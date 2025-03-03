import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
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
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>
          {t("footer.copyright", { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
