import React from "react";
import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const verticalTitleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 0.1,
      x: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <section className={styles.educationSection}>
      <div className={styles.animatedBackground}></div>

      <motion.div
        className={styles.contentWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className={styles.columns}>
          {/* Left Column */}
          <motion.div
            className={styles.column}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.h2
              className={styles.heading}
              whileHover={{ color: "#00bcd4" }}
            >
              {t("education.left.heading")}
            </motion.h2>
            <motion.p
              className={styles.subHeading}
              whileHover={{ color: "#fff" }}
            >
              {t("education.left.subHeading")}
            </motion.p>
            <motion.p
              className={styles.paragraph}
              whileHover={{ color: "#00bcd4" }}
            >
              {t("education.left.paragraph")}
            </motion.p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className={styles.column}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.h2
              className={styles.heading}
              whileHover={{ color: "#00bcd4" }}
            >
              {t("education.right.heading")}
            </motion.h2>
            <motion.p
              className={styles.subHeading}
              whileHover={{ color: "#fff" }}
            >
              {t("education.right.subHeading")}
            </motion.p>
            <motion.p
              className={styles.paragraph}
              whileHover={{ color: "#00bcd4" }}
            >
              {t("education.right.paragraph")}
            </motion.p>
          </motion.div>
        </div>

        {/* Vertical Title */}
        <motion.div
          className={styles.verticalTitle}
          variants={verticalTitleVariants}
        >
          {t("education.verticalTitle")}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
