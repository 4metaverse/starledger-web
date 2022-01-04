import { NextPage } from "next";

import styles from "./linkButton.module.css";

const LinkButton: NextPage<{
  color: "primary" | "secondary";
  href: string;
  icon?: string;
}> = ({ children, color, href, icon }) => {
  return (
    <a
      className={[styles.button, icon ? styles.icon : null, styles[color]].join(
        " "
      )}
      href={href}
      style={{ backgroundImage: icon ? `url(/images/${icon}.svg)` : null }}
    >
      {children}
    </a>
  );
};

export default LinkButton;
