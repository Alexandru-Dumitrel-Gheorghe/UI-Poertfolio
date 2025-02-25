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

function ContactMe() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.content}>
        <h1 className={styles.name}>Alexandru-Dumitrel Gheorghe</h1>
        <p className={styles.title}>Full-Stack Developer / Web Enthusiast</p>

        <div className={styles.contactDetails}>
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
        </div>

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
