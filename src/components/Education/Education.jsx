import React from "react";
import styles from "./Education.module.css";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.educationSection}>
      {/* Optional overlay */}
      <div className={styles.overlay}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.columns}>
          {/* Coloana stângă */}
          <div className={styles.column}>
            <h2 className={styles.heading}>
              {t("education.left.heading")}
            </h2>
            <p className={styles.subHeading}>
              {t("education.left.subHeading")}
            </p>
            <p className={styles.paragraph}>
              {t("education.left.paragraph")}
            </p>
          </div>

          {/* Coloana dreaptă */}
          <div className={styles.column}>
            <h2 className={styles.heading}>
              {t("education.right.heading")}
            </h2>
            <p className={styles.subHeading}>
              {t("education.right.subHeading")}
            </p>
            <p className={styles.paragraph}>
              {t("education.right.paragraph")}
            </p>
          </div>
        </div>

        {/* Titlu vertical "EDUCATION" */}
        <div className={styles.verticalTitle}>
          {t("education.verticalTitle")}
        </div>
      </div>
    </section>
  );
};

export default Education;
