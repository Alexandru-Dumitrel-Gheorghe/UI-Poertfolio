import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <img
        src="/ui/1.svg"
        alt="Design Figma"
        className={styles.introImage}
      />
    </section>
  );
};

export default Introduction;
