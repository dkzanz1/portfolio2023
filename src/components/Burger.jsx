
import React from "react";
import { bubble as Menu } from "react-burger-menu";
import styles from "./Burger.module.css";

function Burger() {
  return (
    <Menu
      outerContainerId={"outer-container"}
      pageWrapId={"page-wrap"}
      burgerButtonClassName={styles.bmBurgerButton}
      burgerBarsClassName={styles.bmBurgerBars}
      burgerBarsHoverClassName={styles.bmBurgerBarsHover}
      crossButtonClassName={styles.bmCrossButton}
      crossClassName={styles.bmCross}
      menuWrapClassName={styles.bmMenuWrap}
      menuClassName={styles.bmMenu}
      morphShapeClassName={styles.bmMorphShape}
      itemListClassName={styles.bmItemList}
      itemClassName={styles.bmItem}
      overlayClassName={styles.bmOverlay}
    >
      <a href="/contact" id="contact" className={styles.bmItem}>
        Contact
      </a>
      <a href="/info" id="info" className={styles.bmItem}>
        Info
      </a>
      <a href="/about" id="about" className={styles.bmItem}>
        About
      </a>
      <a href="/settings" className={styles.bmItem}>
        Settings
      </a>
    </Menu>
  );
}

export default Burger;
