import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Project() {
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
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      rotateY: 5,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      y: -5,
      backgroundColor: "#00a0b1",
      boxShadow: "0 8px 25px rgba(0, 188, 212, 0.4)",
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className={styles.projectSection}>
      {/* Animated background elements */}
      <div className={styles.animatedBackground}></div>

      <motion.div
        className={styles.projectContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Column (Text) */}
        <motion.div className={styles.left} variants={itemVariants}>
          <motion.h2 className={styles.title} whileHover={{ color: "#00bcd4" }}>
            {t("projectTetris.title")}
          </motion.h2>

          <motion.p
            className={styles.description}
            whileHover={{ color: "#fff" }}
          >
            {t("projectTetris.description")}
          </motion.p>

          <motion.div className={styles.lists} variants={containerVariants}>
            <motion.div className={styles.technologies} variants={itemVariants}>
              <h3>{t("projectTetris.technologies")}</h3>
              <ul>
                {[
                  {
                    icon: <FaJsSquare className={styles.icon} />,
                    text: "JavaScript",
                  },
                  { icon: <FaHtml5 className={styles.icon} />, text: "HTML5" },
                  { icon: <FaCss3Alt className={styles.icon} />, text: "CSS3" },
                  { icon: <FaReact className={styles.icon} />, text: "React" },
                ].map((tech, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech.icon}
                    {tech.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className={styles.features} variants={itemVariants}>
              <h3>{t("projectTetris.features")}</h3>
              <ul>
                {Object.values(
                  t("projectTetris.bulletPoints", { returnObjects: true })
                ).map((feature, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.buttonsContainer}
            variants={itemVariants}
          >
            {[
              {
                href: "https://tetris-alex93.netlify.app/",
                text: t("projectTetris.liveDemoButton"),
              },
              {
                href: "https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic",
                text: t("projectTetris.githubButton"),
              },
            ].map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column (Laptop Image) */}
        <motion.div
          className={styles.right}
          variants={imageVariants}
          whileHover="hover"
        >
          <div className={styles.laptopContainer}>
            <img
              src="/ui/laptop-tetris.png"
              alt="Laptop Tetris"
              className={styles.laptopImage}
            />
            <div className={styles.laptopGlow}></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Project;
