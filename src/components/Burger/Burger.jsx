// Burger.jsx
import React, { useState } from "react";
import styles from "./Burger.module.css";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
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

      {/* 2. Mobile Burger (< 1024px) */}
      <div className={styles.mobileWrapper}>
        <button
          type="button"
          className={`${styles.burgerTrigger} ${isOpen ? styles.btnActive : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {/* Standard 8: pointer-events: none when closed so clicks pass through */}
        <div
          className={`${styles.topDownMenu} ${isOpen ? styles.menuVisible : ""}`}
          aria-hidden={!isOpen}
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
