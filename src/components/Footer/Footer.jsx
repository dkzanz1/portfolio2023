import React from "react";
import styles from "./Footer.module.css";
import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContents}>
          <SocialFollow />
          <p className={styles.dynocopy}>
            @<time>{new Date().getFullYear()}</time> All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
