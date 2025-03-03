import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaGlobe
} from "react-icons/fa";
import { SiMiro, SiFigma } from "react-icons/si";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Meniu mobil
  const [isScrolled, setIsScrolled] = useState(false); // Efect scroll pe navbar
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false); // Dropdown limbă (desktop și mobil)
  const { t, i18n } = useTranslation();

  // Efect scroll: schimbă fundalul navbar-ului după 50px scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle pentru meniul mobil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle pentru dropdown-ul de limbă (desktop și mobil)
  const toggleLangDropdown = () => {
    setIsLangDropdownOpen((prev) => !prev);
  };

  // Schimbă limba și închide dropdown-ul (la desktop sau mobil)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        {/* Link-urile de navigare (desktop) */}
        <div className={styles.linksContainer}>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            {t("navbar.home") || "Home"}
          </Link>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            {t("navbar.about") || "About"}
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            {t("navbar.skills") || "Skills"}
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            {t("navbar.projects") || "Projects"}
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            {t("navbar.contact") || "Contact"}
          </Link>
        </div>

        {/* Zona dreaptă: social links și dropdown limbă (desktop) */}
        <div className={styles.rightContainer}>
          <div className={styles.socialLinks}>
            <a href="https://miro.com" target="_blank" rel="noreferrer">
              <SiMiro />
            </a>
            <a href="https://figma.com" target="_blank" rel="noreferrer">
              <SiFigma />
            </a>
            <a
              href="https://github.com/Alexandru-Dumitrel-Gheorghe"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Dropdown limbă (doar pe desktop) */}
          <div className={`${styles.languageDropdown} ${styles.desktopOnly}`}>
            <FaGlobe
              className={styles.languageIcon}
              onClick={toggleLangDropdown}
            />
            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  className={styles.dropdownContent}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <button onClick={() => changeLanguage("de")}>
                    Deutsch
                  </button>
                  <button onClick={() => changeLanguage("en")}>
                    English
                  </button>
                  <button onClick={() => changeLanguage("ro")}>
                    Română
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Buton hamburger (doar pe mobil) */}
          <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </div>

      {/* Meniul mobil (overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ clipPath: "circle(0% at 90% 10%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 90% 10%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 90% 10%)", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <FaTimes />
            </div>
            <div className={styles.mobileMenuContent}>
              <Link
                onClick={toggleMenu}
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {t("navbar.home") || "Home"}
              </Link>
              <Link
                onClick={toggleMenu}
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {t("navbar.about") || "About"}
              </Link>
              <Link
                onClick={toggleMenu}
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {t("navbar.skills") || "Skills"}
              </Link>
              <Link
                onClick={toggleMenu}
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {t("navbar.projects") || "Projects"}
              </Link>
              <Link
                onClick={toggleMenu}
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {t("navbar.contact") || "Contact"}
              </Link>

              {/* Dropdown limbă în meniul mobil */}
              <div className={styles.mobileLangDropdown}>
                <FaGlobe
                  className={styles.mobileLangIcon}
                  onClick={toggleLangDropdown}
                />
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      className={styles.mobileDropdownContent}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button onClick={() => { changeLanguage("de"); toggleMenu(); }}>
                        Deutsch
                      </button>
                      <button onClick={() => { changeLanguage("en"); toggleMenu(); }}>
                        English
                      </button>
                      <button onClick={() => { changeLanguage("ro"); toggleMenu(); }}>
                        Română
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Social links mobil (opțional) */}
              <div className={styles.mobileSocialLinks}>
                <a href="https://miro.com" target="_blank" rel="noreferrer">
                  <SiMiro />
                </a>
                <a href="https://figma.com" target="_blank" rel="noreferrer">
                  <SiFigma />
                </a>
                <a
                  href="https://github.com/Alexandru-Dumitrel-Gheorghe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
