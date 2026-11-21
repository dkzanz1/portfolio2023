// Burger.jsx
import React, { useState } from "react";
import styles from "./Burger.module.css";

function Burger() {
  // Creates State for the "Curtain" drop-down
  const [isOpen, setIsOpen] = useState(false);
  // Helper to close menu when a link is clicked
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);
  return (
    <>
      {/* 1. Standard Desktop Nav */}
      <nav className={styles.desktopNav} aria-label="Main Navigation">
        <a href="#about" onClick={handleNavClick}>
          About
        </a>
        <a href="#skills" onClick={handleNavClick}>
          Skills
        </a>
        <a href="#projects" onClick={handleNavClick}>
          Projects
        </a>
        <a href="#contact" onClick={handleNavClick}>
          Contact
        </a>
      </nav>

      {/* 2. Mobile Burger refactored (set to task 8.2 & 8.3)(Visible < 1024px) */}
      <div className={styles.mobileWrapper}>
        {/* The Toggle Button (Burger Icon) */}
        <button
          type="button"
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
          aria-hidden={!isOpen}
          /* Standard 8: Prevents the hidden curtain from blocking clicks to the boat/parallax */
          // Note: This is a safety measure to ensure that when the menu is closed, it does not interfere with interactions on the boat/parallax elements below it. By setting pointer-events to none when the menu is hidden, we allow clicks to pass through the hidden menu to the elements underneath. When the menu is visible, we set pointer-events back to auto to allow interaction with the menu links.
        >
          <nav className={styles.curtainLinks} aria-label="Mobile Navigation">
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Burger;
