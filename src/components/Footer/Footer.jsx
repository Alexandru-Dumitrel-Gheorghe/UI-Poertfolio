import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { SiMiro, SiFigma } from "react-icons/si";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactItems = [
    { icon: <FaPhoneAlt />, text: "+49 1577 2158264" },
    { icon: <FaEnvelope />, text: "gheorghe.a@outlook.com" },
    { icon: <FaMapMarkerAlt />, text: "Fürstenfeldbruck, Deutschland" },
    { icon: <FaUser />, text: "32 Jahre" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Alexandru-Dumitrel-Gheorghe",
    },
    { icon: <SiMiro />, url: "https://miro.com" },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
    },
    { icon: <SiFigma />, url: "https://figma.com" },
  ];

  const navLinks = [
    { id: "home", label: t("footer.nav.home") },
    { id: "about", label: t("footer.nav.about") },
    { id: "skills", label: t("footer.nav.skills") },
    { id: "projects", label: t("footer.nav.projects") },
    { id: "contact", label: t("footer.nav.contact") },
  ];

  return (
    <footer className={styles.footer}>
      {/* Decorative top border */}
      <div className={styles.footerBorder}></div>

      {/* Floating back to top button */}
      <motion.button
        className={styles.backToTop}
        onClick={scrollToTop}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#64ffda",
          color: "#0a192f",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp />
      </motion.button>

      {/* Main footer content */}
      <div className={styles.topFooter}>
        {/* Navigation links */}
        <motion.nav
          className={styles.navLinks}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className={styles.sectionTitle}>Navigation</h4>
          <div className={styles.navItems}>
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={styles.navLink}
                whileHover={{
                  color: "#64ffda",
                  x: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Contact information */}
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className={styles.sectionTitle}>Contact</h4>
          <div className={styles.contactItems}>
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.contactItem}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={styles.contactIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className={styles.socialContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className={styles.sectionTitle}>Follow Me</h4>
          <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{
                  y: -5,
                  color:
                    index === 0
                      ? "#fff"
                      : index === 1
                      ? "#050038"
                      : index === 2
                      ? "#0077b5"
                      : "#000",
                  backgroundColor:
                    index === 0
                      ? "#000"
                      : index === 1
                      ? "#ffd02f"
                      : index === 2
                      ? "#fff"
                      : "#ff7262",
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright section */}
      <motion.div
        className={styles.bottomFooter}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          {t("footer.copyright", {
            year: currentYear,
          })}
        </p>
        <div className={styles.footerNote}>
          <span>Built with React & Next.js</span>
          <span>Designed with ❤️</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
