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
      {/* Titluri principale */}
      <div className={styles.titleArea}>
        <h1 className={styles.mainTitle}>KONTAKT</h1>
        <p className={styles.subTitle}>Lass uns in Verbindung bleiben</p>
      </div>

      {/* Casetă cu informațiile de contact */}
      <div className={styles.infoBox}>
        <div className={styles.infoItem}>
          <FaPhoneAlt className={styles.icon} />
          <div>
            <h3 className={styles.infoLabel}>Telefon</h3>
            <p className={styles.infoValue}>+49 1577 2158264</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <div>
            <h3 className={styles.infoLabel}>E-Mail Adresse</h3>
            <p className={styles.infoValue}>gheorghe.93@icloud.com</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <div>
            <h3 className={styles.infoLabel}>Standort</h3>
            <p className={styles.infoValue}>Fürstenfeldbruck, Deutschland</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <FaUser className={styles.icon} />
          <div>
            <h3 className={styles.infoLabel}>Alter</h3>
            <p className={styles.infoValue}>32 Jahre</p>
          </div>
        </div>
      </div>

      {/* Iconițe Social Media */}
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
        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://figma.com" target="_blank" rel="noreferrer">
          <SiFigma />
        </a>
      </div>
    </section>
  );
}

export default ContactMe;
