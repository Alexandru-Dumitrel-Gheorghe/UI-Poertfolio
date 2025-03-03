import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactMe.module.css";

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

    // Formularul va fi trimis direct către Formspree fără a mai folosi un backend
    const form = e.target;

    // Trimite formularul către Formspree
    form.submit();
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.centerText}>
            <h2 className={styles.scriptText}>{t("contact.letsWork")}</h2>
            <h1 className={styles.boldText}>{t("contact.together")}</h1>
            <p className={styles.subTitle}>{t("contact.ready")}</p>
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.projectButton}>
              {t("contact.projects")}
            </button>
            <button className={styles.cvButton}>
              {t("contact.resume")}
            </button>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>{t("contact.contactForm")}</h3>
            <form
              onSubmit={handleFormSubmit}
              className={styles.contactForm}
              action="https://formspree.io/f/xqaerwpg"  // Endpoint-ul Formspree
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

              <button type="submit" className={styles.sendButton}>
                {t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
