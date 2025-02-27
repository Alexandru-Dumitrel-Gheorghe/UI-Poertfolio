import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PERSONAL SKILLS
      </motion.h2>

      <div className={styles.container}>
        {/* Left Column: Text and Skill Cards */}
        <motion.div 
          className={styles.leftSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className={styles.skillCard}
            whileHover={{ scale: 1.05 }}
          >
            <p className={styles.skillTitle}>FRONT END WEB DEVELOPER</p>
          </motion.div>
          <p className={styles.description}>
            I am a passionate Front-End Developer focused on creating user-friendly and engaging websites. With extensive knowledge in HTML, CSS, and JavaScript.
          </p>

          <motion.div 
            className={styles.skillCard}
            whileHover={{ scale: 1.05 }}
          >
            <p className={styles.skillTitle}>UI/UX DESIGN</p>
          </motion.div>
          <p className={styles.description}>
            As a UI/UX Designer, I create user-centered digital experiences that are both aesthetically pleasing and functional.
          </p>
        </motion.div>

        {/* Right Column: Image */}
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
              alt="Laptop"
              className={styles.laptopImage}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
