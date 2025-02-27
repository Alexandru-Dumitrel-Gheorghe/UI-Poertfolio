import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillsData = [
  {
    title: "FRONT END WEB DEVELOPER",
    description:
      "Ich bin ein leidenschaftlicher Front-End Developer mit einem Fokus auf die Entwicklung benutzerfreundlicher und ansprechender Webseiten. Mit umfassenden Kenntnissen in HTML, CSS und JavaScript.",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Als UI/UX Designer gestalte ich benutzerzentrierte digitale Erlebnisse, die sowohl ästhetisch ansprechend als auch funktional sind.",
  },
];

const SkillCard = ({ title, description }) => (
  <div className={styles.skillItem}>
    <motion.div
      className={styles.skillCard}
      whileHover={{ scale: 1.05 }}
    >
      <p className={styles.skillTitle}>{title}</p>
    </motion.div>
    <p className={styles.description}>{description}</p>
  </div>
);

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
        {/* Left side: Text & Skill Cards */}
        <motion.div
          className={styles.leftSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title} 
              description={skill.description} 
            />
          ))}
        </motion.div>

        {/* Right side: Image */}
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
