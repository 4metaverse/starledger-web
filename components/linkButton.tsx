import { NextPage } from "next";

import styles from "./linkButton.module.css";

const LinkButton: NextPage<{ href: string; icon?: string }> = ({
  children,
  href,
  icon,
}) => {
  return (
    <a
      className={[styles.button].concat(icon ? styles.icon : null).join(" ")}
      href={href}
      style={{ backgroundImage: icon ? `url(/images/${icon}.svg)` : null }}
    >
      {children}
    </a>
  );
};

export default LinkButton;
