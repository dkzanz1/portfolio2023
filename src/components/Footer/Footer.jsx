import React from "react";
import styles from "./Footer.module.css";
import SocialFollow from "../SocialFollow";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footercontents}>
          <SocialFollow />
          <p className={styles.dynocopy}>
            @{new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
