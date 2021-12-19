import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.copyright}>
            &copy; 2021 Austin Code Shop LLC
          </div>
          <div>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a
                  className={styles.github}
                  href="https://github.com/StarLedgerNFT"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li className={styles.socialItem}>
                <a
                  className={styles.twitter}
                  href="https://twitter.com/StarLedgerNFT"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
