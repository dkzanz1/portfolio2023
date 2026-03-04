// Burger.jsx
import React, { useState } from "react";
import styles from "./Burger.module.css";

function Burger() {
  // Task 8.2: Creat State for the "Curtain" drop-down
  const [isOpen, setIsOpen] = useState(false);
  // Helper to close menu when a link is clicked
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      {/* 1. Standard Desktop Nav (Visible > 1024px) */}
      <nav className={styles.desktopNav} aria-label="Main Navigation">
        <a href="/contact">Contact</a>
        <a href="/info">Info</a>
        <a href="/about">About</a>
        <a href="/settings">Settings</a>
      </nav>

      {/* 2. Mobile Burger refactored (set to task 8.2 & 8.3)(Visible < 1024px) */}
      <div className={styles.mobileWrapper}>
        {/* The Toggle Button (Burger Icon) */}
        <button
          className={`${styles.burgerTrigger} ${isOpen ? styles.btnActive : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
        {/* The Curtain Menu */}
        <div
          className={`${styles.topDownMenu} ${isOpen ? styles.menuVisible : ""}`}
          /* Standard 8: Prevents the hidden curtain from blocking clicks to the boat/parallax */
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <nav className={styles.curtainLinks}>
            <a href="/contact" onClick={toggleMenu}>
              Contact
            </a>
            <a href="/info" onClick={toggleMenu}>
              Info
            </a>
            <a href="/about" onClick={toggleMenu}>
              About
            </a>
            <a href="/settings" onClick={toggleMenu}>
              Settings
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Burger;
