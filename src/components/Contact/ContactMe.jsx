import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactMe.module.css";
import { motion } from "framer-motion";

function ContactMe() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.submit();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.mainContent}>
        <motion.div
          className={styles.leftSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.centerText}>
            <h2 className={styles.scriptText}>{t("contact.letsWork")}</h2>
            <h1 className={styles.boldText}>{t("contact.together")}</h1>
            <p className={styles.subTitle}>{t("contact.ready")}</p>
          </div>

          <div className={styles.buttonGroup}>
            <motion.a
              href="#projects"
              className={styles.projectButton}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("contact.projects")}
            </motion.a>
            <motion.a
              href="/resume.pdf" // Update with your actual CV path
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvButton}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("contact.resume")}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.rightSide}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>{t("contact.contactForm")}</h3>
            <form
              onSubmit={handleFormSubmit}
              className={styles.contactForm}
              action="https://formspree.io/f/xqaerwpg"
              method="POST"
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("contact.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name")}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">{t("contact.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex: name@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.message")}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={styles.sendButton}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("contact.send")}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMe;
