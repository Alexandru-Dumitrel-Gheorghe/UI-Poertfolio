import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skillsData = t("skills.items", { returnObjects: true });

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
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Animated background elements */}
      <div className={styles.animatedBackground}></div>

      <motion.h2
        className={styles.sectionTitle}
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {t("skills.sectionTitle")}
      </motion.h2>

      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left: Text and Skill Cards */}
        <div className={styles.leftSide}>
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillItem}
              variants={itemVariants}
            >
              <motion.div
                className={styles.skillCard}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(0, 188, 212, 0.2)",
                  borderColor: "#00bcd4",
                  boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <p className={styles.skillTitle}>{skill.title}</p>
              </motion.div>
              <motion.p
                className={styles.description}
                whileHover={{
                  color: "#fff",
                  x: 5,
                }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Right: Image */}
        <motion.div
          className={styles.rightSide}
          variants={imageVariants}
          whileHover="hover"
        >
          <div className={styles.laptopContainer}>
            <img
              src="/ui/skills-laptop.png"
              alt="Laptop showcasing skills"
              className={styles.laptopImage}
            />
            {/* Glow effect */}
            <div className={styles.laptopGlow}></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
