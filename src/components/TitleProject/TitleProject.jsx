import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import styles from "./TitleProject.module.css";
import { useTranslation } from "react-i18next";

const TitleProject = ({ title, subtitle, scrollToSection }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const targetId = scrollToSection || "task-timer";
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const arrowVariants = {
    initial: { y: 0 },
    hover: { y: 5, rotate: 10 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <motion.section
      id="projects"
      className={styles.titleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className={styles.animatedBackground}></div>

      <motion.h1
        className={styles.mainTitle}
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        {title || t("titleProject.defaultTitle")}
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        variants={itemVariants}
        whileHover={{ color: "#fff" }}
      >
        {subtitle || t("titleProject.defaultSubtitle")}
      </motion.p>

      <motion.div
        className={styles.arrowContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleScroll}
        variants={arrowVariants}
        animate={["pulse", isHovered ? "hover" : "initial"]}
      >
        <FaChevronDown className={styles.downArrow} />
        <div className={styles.arrowGlow}></div>
      </motion.div>
    </motion.section>
  );
};

export default TitleProject;
