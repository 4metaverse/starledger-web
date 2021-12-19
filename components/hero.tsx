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
            Limited NFT collection of 5,000 stars that represent stars in our
            own galaxy. On the Ethereum blockchain. Powered by $METIS.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
