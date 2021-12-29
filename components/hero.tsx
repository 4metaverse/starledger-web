import LinkButton from "./linkButton";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.text}>
          <img className={styles.logo} src="/images/starledger-logo.svg" />
          <p>
            Limited NFT collection of 5,000 stars that represent stars in our
            own galaxy.
          </p>
          <LinkButton href="https://app.starledger.org">Launch App</LinkButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
