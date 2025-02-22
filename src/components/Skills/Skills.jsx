import React from "react";
import styles from "./Skills.module.css";

// Exemplu: react-icons (asigură-te că ai instalat cu `npm install react-icons`)
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaPaintBrush,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import { SiMongodb, SiMiro } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      {/* Fundal și overlay */}
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Stânga: carduri */}
        <div className={styles.leftSide}>
          <div className={styles.card}>
            <div className={styles.frameWrapper}>
              <img
                src="/ui/rama.png"
                alt="Frame"
                className={styles.frameImage}
              />
              <div className={styles.frameText}>FRONT END WEB DEVELOPER</div>
            </div>
            <p className={styles.cardParagraph}>
              Ich bin ein leidenschaftlicher Front-End Developer mit einem Fokus
              auf die Entwicklung benutzerfreundlicher und ansprechender
              Webseiten. Mit ausgedehnten Kenntnissen in HTML, CSS und JavaScript
              sorge ich für eine optimale User Experience.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.frameWrapper}>
              <img
                src="/ui/rama.png"
                alt="Frame"
                className={styles.frameImage}
              />
              <div className={styles.frameText}>UI/UX DESIGN</div>
            </div>
            <p className={styles.cardParagraph}>
              Als UI/UX Designer gestalte ich benutzerzentrierte digitale
              Erlebnisse, die sowohl ästhetisch ansprechend als auch funktional
              sind. Ich lege großen Wert auf intuitive Navigation und modernes
              Design.
            </p>
          </div>
        </div>

        {/* Dreapta: laptop + skill-uri în interior */}
        <div className={styles.rightSide}>
          <div className={styles.laptopContainer}>
            <img
              src="/ui/laptop.png"
              alt="Laptop"
              className={styles.laptopImage}
            />

            {/* Containerul skill-urilor */}
            <div className={styles.laptopSkills}>
              <h3 className={styles.laptopSkillsTitle}>MY SKILLS</h3>
              <div className={styles.skillsGrid}>
                {/* 1) Front End */}
                <div className={styles.category}>
                  <h4>
                    <FaLaptopCode /> Front End
                  </h4>
                  <ul>
                    <li>
                      <FaHtml5 /> HTML5
                    </li>
                    <li>
                      <FaCss3Alt /> CSS3
                    </li>
                    <li>
                      <FaJs /> JavaScript (ES6+)
                    </li>
                    <li>
                      <FaReact /> React
                    </li>
                    <li>
                      <FaBootstrap /> Bootstrap
                    </li>
                  </ul>
                </div>

                {/* 2) Back End */}
                <div className={styles.category}>
                  <h4>
                    <FaServer /> Back End
                  </h4>
                  <ul>
                    <li>
                      <FaNodeJs /> Node.js
                    </li>
                    <li>
                      <SiMongodb /> MongoDB
                    </li>
                    <li>
                      <FaGitAlt /> Git &amp; GitHub
                    </li>
                  </ul>
                </div>

                {/* 3) UI/UX */}
                <div className={styles.category}>
                  <h4>
                    <FaPaintBrush /> UI/UX Design
                  </h4>
                  <ul>
                    <li>
                      <TbBrandFigma /> Figma
                    </li>
                    <li>
                      <SiMiro /> Miro
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Titlu mare */}
        <h1 className={styles.title}>PERSONAL SKILLS</h1>
      </div>
    </section>
  );
};

export default Skills;
