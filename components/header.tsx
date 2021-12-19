import { useState } from "react";

import LinkButton from "./linkButton";

import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.wrapper}>
          <h1 className={styles.logo}>Star<span>Ledger</span></h1>
          {/* <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <a href="#">My Stars</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#">Search</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#">About</a>
              </li>
            </ul>
          </nav> */}
          <LinkButton href="https://app.starledger.org">Launch App</LinkButton>
        </section>
      </header>
    </>
  );
};

export default Header;
