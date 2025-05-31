import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { SiMiro, SiFigma } from "react-icons/si";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangDropdown = () => setIsLangDropdownOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
    if (isOpen) setIsOpen(false);
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "ro", name: "Română" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        {/* Logo/Brand */}
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.logoText}>AG</span>
          <span className={styles.logoDot}></span>
        </motion.div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div className={styles.linksContainer}>
              {["home", "about", "skills", "projects", "contact"].map(
                (link) => (
                  <Link
                    key={link}
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`${styles.navLink} ${
                      activeLink === link ? styles.active : ""
                    }`}
                    onSetActive={() => setActiveLink(link)}
                  >
                    {t(`navbar.${link}`) ||
                      link.charAt(0).toUpperCase() + link.slice(1)}
                    <motion.span
                      className={styles.linkUnderline}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeLink === link ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                )
              )}
            </div>

            {/* Right Section - Desktop */}
            <div className={styles.rightContainer}>
              <div className={styles.socialLinks}>
                {[
                  { icon: <SiMiro />, url: "https://miro.com" },
                  { icon: <SiFigma />, url: "https://figma.com" },
                  {
                    icon: <FaGithub />,
                    url: "https://github.com/Alexandru-Dumitrel-Gheorghe",
                  },
                  {
                    icon: <FaLinkedin />,
                    url: "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, color: "#00bcd4" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Language Dropdown - Desktop */}
              <div className={styles.languageDropdown}>
                <motion.div
                  className={styles.languageTrigger}
                  onClick={toggleLangDropdown}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGlobe />
                  <span>{i18n.language.toUpperCase()}</span>
                </motion.div>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      className={styles.dropdownContent}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          whileHover={{ x: 5, color: "#00bcd4" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {lang.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.div
            className={styles.mobileMenuIcon}
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            <motion.div
              className={styles.mobileMenuBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className={styles.mobileMenuContent}>
                {["home", "about", "skills", "projects", "contact"].map(
                  (link) => (
                    <Link
                      key={link}
                      to={link}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className={`${styles.mobileNavLink} ${
                        activeLink === link ? styles.active : ""
                      }`}
                      onClick={toggleMenu}
                      onSetActive={() => setActiveLink(link)}
                    >
                      {t(`navbar.${link}`) ||
                        link.charAt(0).toUpperCase() + link.slice(1)}
                      {activeLink === link && (
                        <motion.span
                          className={styles.mobileLinkIndicator}
                          layoutId="mobileIndicator"
                        />
                      )}
                    </Link>
                  )
                )}

                <div className={styles.mobileFooter}>
                  <div className={styles.mobileLanguageDropdown}>
                    <div
                      className={styles.languageTrigger}
                      onClick={toggleLangDropdown}
                    >
                      <FaGlobe />
                      <span>{i18n.language.toUpperCase()}</span>
                    </div>

                    <AnimatePresence>
                      {isLangDropdownOpen && (
                        <motion.div
                          className={styles.mobileDropdownContent}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => changeLanguage(lang.code)}
                            >
                              {lang.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={styles.mobileSocialLinks}>
                    {[
                      { icon: <SiMiro />, url: "https://miro.com" },
                      { icon: <SiFigma />, url: "https://figma.com" },
                      {
                        icon: <FaGithub />,
                        url: "https://github.com/Alexandru-Dumitrel-Gheorghe",
                      },
                      {
                        icon: <FaLinkedin />,
                        url: "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
                      },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
