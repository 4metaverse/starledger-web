import { useState } from "react";

import Button from "./button";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.text}>
          <h2>
            Buy a star. On Ethereum.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
