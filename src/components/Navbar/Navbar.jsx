import React, { useState, useEffect } from "react"; 
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMiro, SiFigma } from "react-icons/si";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        {/* Links (left side) */}
        <div className={styles.linksContainer}>
          <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
          <Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link>
          <Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
        </div>

        {/* Icons (right side) */}
        <div className={styles.socialLinks}>
          <a href="https://miro.com" target="_blank" rel="noreferrer">
            <SiMiro />
          </a>
          <a href="https://figma.com" target="_blank" rel="noreferrer">
            <SiFigma />
          </a>
          <a href="https://github.com/Alexandru-Dumitrel-Gheorghe" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Mobile menu, appears over the screen */}
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
              <Link onClick={toggleMenu} to="home" smooth={true} duration={500} offset={-70}>Home</Link>
              <Link onClick={toggleMenu} to="about" smooth={true} duration={500} offset={-70}>About</Link>
              <Link onClick={toggleMenu} to="skills" smooth={true} duration={500} offset={-70}>Skills</Link>
              <Link onClick={toggleMenu} to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
              <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
              
              <div className={styles.mobileSocialLinks}>
                <a href="https://miro.com" target="_blank" rel="noreferrer">
                  <SiMiro />
                </a>
                <a href="https://figma.com" target="_blank" rel="noreferrer">
                  <SiFigma />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
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
