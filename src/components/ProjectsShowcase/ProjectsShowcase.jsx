import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ProjectsShowcase.module.css";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";

const PROJECTS = [
  {
    title: "Certus Solutions",
    description:
      "Premium windows and doors company website with modern design, animations and SEO optimization. Built with cutting-edge frontend technologies.",
    technologies: [
      <FaReact />,
      <SiNextdotjs />,
      <FaCss3Alt />,
      <SiTypescript />,
    ],
    features: [
      "Multi-page navigation",
      "Interactive 3D product viewer",
      "SEO optimized content",
      "Animated transitions",
    ],
    image: "/ui/certus-mockup.png",
    live: "https://certussolutions.de",
    github: "#",
    accentColor: "#00bcd4",
  },
  {
    title: "Tetris Game",
    description:
      "Modern reimagining of the classic Tetris game with multiple levels, progressive difficulty and responsive design.",
    technologies: [<FaReact />, <FaCss3Alt />, <FaJs />],
    features: [
      "Progressive difficulty",
      "Mobile responsive",
      "Live score tracking",
      "Sound effects",
    ],
    image: "/ui/laptop-tetris.png",
    live: "https://tetris-alex93.netlify.app/",
    github: "https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic",
    accentColor: "#ff5252",
  },
  {
    title: "Task Timer App",
    description:
      "Full-stack productivity application with time tracking, user authentication and detailed analytics dashboard.",
    technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <FaCss3Alt />],
    features: [
      "JWT authentication",
      "Time tracking analytics",
      "RESTful API",
      "Data visualization",
    ],
    image: "/ui/task-laptop.png",
    live: "https://task-timerv1.netlify.app/login",
    github: "https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app",
    accentColor: "#64ffda",
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
    hover: {
      y: -10,
      rotateY: 5,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.projectCard}
      style={{ "--accent-color": project.accentColor }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left - Text Content */}
      <motion.div className={styles.info} variants={textVariants}>
        <div className={styles.projectHeader}>
          <span className={styles.projectNumber}>0{index + 1}</span>
          <h3 className={styles.title}>{project.title}</h3>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tech}>
          {project.technologies.map((Icon, i) => (
            <motion.span
              className={styles.techIcon}
              key={i}
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {Icon}
            </motion.span>
          ))}
        </div>

        <ul className={styles.features}>
          {project.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i }}
            >
              <span className={styles.featureMarker} />
              {feature}
            </motion.li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveBtn}
            whileHover={{
              boxShadow: `0 5px 15px ${project.accentColor}66`,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FaExternalLinkAlt style={{ marginRight: 8 }} /> Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghBtn}
            whileHover={{
              backgroundColor: "#333",
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub style={{ marginRight: 8 }} /> Code
          </motion.a>
        </div>
      </motion.div>

      {/* Right - Image Mockup */}
      <motion.div
        className={styles.mockup}
        variants={imageVariants}
        whileHover="hover"
      >
        <div className={styles.mockupContainer}>
          <img src={project.image} alt={project.title} />
          <div className={styles.mockupGlow} />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className={styles.cardOrnament} />
    </motion.div>
  );
};

const ProjectsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      {/* Animated background elements */}
      <div className={styles.animatedBackground} />

      {/* Floating tech icons */}
      <div className={styles.floatingTechIcons}>
        {[
          <FaReact />,
          <FaNodeJs />,
          <SiMongodb />,
          <FaJs />,
          <SiNextdotjs />,
        ].map((Icon, i) => (
          <motion.div
            key={i}
            className={styles.floatingIcon}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -100],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Icon}
          </motion.div>
        ))}
      </div>

      <motion.h2
        className={styles.sectionTitle}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        Featured <span className={styles.highlight}>Projects</span>
        <motion.span
          className={styles.titleUnderline}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "anticipate" }}
        />
      </motion.h2>

      <motion.div
        className={styles.projectsGrid}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

      {/* View more button */}
      <motion.div
        className={styles.viewMore}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      ></motion.div>
    </section>
  );
};

export default ProjectsShowcase;
