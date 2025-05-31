import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    controls.start("visible");
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down video slightly
    }
  }, [controls]);

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVDownload = () => {
    window.open("/ui/Lebenslauf.pdf", "_blank");
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
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

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Particle background */}
      <div className={styles.particles}></div>

      {/* Background video */}
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ui/introductionvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glass morphism overlay */}
      <div className={styles.glassOverlay}></div>

      <motion.div
        className={styles.heroContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top left corner */}
        <motion.div
          className={styles.topLeft}
          variants={leftVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>
            {t("hero.frontend")} <br />
            {t("hero.uiux")}
          </h2>
        </motion.div>

        {/* Top right corner */}
        <motion.div
          className={styles.topRight}
          variants={rightVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t("hero.nameAndDate", { date: formattedDate }),
            }}
          />
        </motion.div>

        {/* Central content */}
        <motion.div
          className={styles.centerContent}
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.imageWrapper}>
            {/* Animated rings */}
            <span className={styles.pulseRing}></span>
            <span className={styles.pulseRing2}></span>
            <motion.img
              src="/ui/profil.jpg"
              alt={t("hero.profileAlt")}
              className={styles.profileImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.h1
            className={styles.title}
            whileHover={{ color: "#00bcd4" }}
            transition={{ duration: 0.3 }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            className={styles.tagline}
            whileHover={{ color: "#00bcd4" }}
            transition={{ duration: 0.3 }}
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.p
            className={styles.description}
            whileHover={{ color: "#fff" }}
            transition={{ duration: 0.3 }}
          >
            {t("hero.description")}
          </motion.p>

          <div className={styles.buttonGroup}>
            <motion.button
              className={styles.projectButton}
              onClick={handleProjectsClick}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.projectsButton")}
            </motion.button>

            <motion.button
              className={styles.cvButton}
              onClick={handleCVDownload}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0, 188, 212, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cvButton")}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
