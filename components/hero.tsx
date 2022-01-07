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
          <p className={styles.notice}>Minting starts Feb 8</p>
          <p>
            Limited NFT collection of 5,000 stars
            <br />
            that represent stars in our own galaxy.
          </p>
          <p>
            {/* <LinkButton color="secondary" href="https://app.starledger.org">
              Roadmap
            </LinkButton> */}
            <LinkButton color="primary" href="https://app.starledger.org">
              Launch App
            </LinkButton>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
