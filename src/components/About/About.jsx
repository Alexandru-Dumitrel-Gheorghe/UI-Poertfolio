import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, rotateY: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      rotateY: -15,
      scale: 0.95,
      transition: { duration: 1, delay: 0.5 },
    },
    hover: {
      rotateY: 0,
      scale: 1,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
    },
  };

  return (
    <section className={styles.aboutSection} id="about" ref={ref}>
      {/* Animated background elements */}
      <div className={styles.animatedCircles}></div>

      {/* Main container */}
      <motion.div
        className={styles.aboutContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left side: Text content */}
        <motion.div className={styles.leftSide} variants={containerVariants}>
          <motion.h1
            className={styles.introTitle}
            variants={itemVariants}
            whileHover={{ color: "#00bcd4" }}
          >
            {t("about.introTitle")}
          </motion.h1>

          {[1, 2, 3].map((i) => (
            <motion.p
              key={i}
              className={styles.paragraph}
              variants={itemVariants}
              transition={{ delay: 0.2 * i }}
              whileHover={{ color: "#fff" }}
            >
              {t(`about.paragraph${i}`)}
            </motion.p>
          ))}
        </motion.div>

        {/* Right side: Video with tilt effect */}
        <motion.div
          className={styles.rightSide}
          variants={videoVariants}
          whileHover="hover"
        >
          <div className={styles.videoWrapper}>
            <video className={styles.cubeVideo} autoPlay loop muted playsInline>
              <source src="/ui/introductionvideo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated divider */}
      <motion.div
        className={styles.sectionDivider}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  );
};

export default About;
