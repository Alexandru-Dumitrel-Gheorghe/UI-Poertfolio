import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <nav className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </div>
      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>
          Developed &amp; Designed by Alexandru Gheorghe © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
