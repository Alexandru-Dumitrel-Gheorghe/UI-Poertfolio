import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  // Obținem array-ul de abilități din traduceri; asigură-te că ai setat returnObjects: true
  const skillsData = t("skills.items", { returnObjects: true });

  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("skills.sectionTitle")}
      </motion.h2>

      <div className={styles.container}>
        {/* Stânga: Text și Skill Cards */}
        <motion.div
          className={styles.leftSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <motion.div
                className={styles.skillCard}
                whileHover={{ scale: 1.05 }}
              >
                <p className={styles.skillTitle}>{skill.title}</p>
              </motion.div>
              <p className={styles.description}>{skill.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Dreapta: Imagine */}
        <motion.div
          className={styles.rightSide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className={styles.laptopContainer}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/ui/skills-laptop.png"
              alt="Laptop showcasing skills"
              className={styles.laptopImage}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
