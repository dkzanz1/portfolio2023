// Burger.jsx
import React from "react";
import { bubble as Menu } from "react-burger-menu";
import styles from "./Burger.module.css";

function Burger() {
  return (
    <Menu
    // **CRITICAL CHANGE note after vite update: Use bracket notation for all kebab-case classes**
      outerContainerId={'outer-container'}
      pageWrapId={'page-wrap'}
      burgerButtonClassName={styles['bm-burger-button']}
      // burgerBarsClassName={styles['bm-burger-bars']} 
      burgerBarsHoverClassName={styles['bm-burger-bars-hover']} 
      crossButtonClassName={styles['bm-cross-button']}
      crossClassName={styles['bm-cross']}
      menuWrapClassName={styles['bm-menu-wrap']}
      menuClassName={styles['bm-menu']}
      morphShapeClassName={styles['bm-morph-shape']}
      itemListClassName={styles['bm-item-list']}
      itemClassName={styles['bm-item']}
      overlayClassName={styles['bm-overlay']}
    >
   <a href="/contact" id="contact" className={styles['bm-item']}>
        Contact
      </a>
      <a href="/info" id="info" className={styles['bm-item']}>
        Info
      </a>
      <a href="/about" id="about" className={styles['bm-item']}>
        About
      </a>
      <a href="/settings" className={styles['bm-item']}>
        Settings
      </a>
    </Menu>
  );
}

export default Burger;
