// File: src/App.jsx
import React, { Fragment } from "react";
import styles from "./App.module.css";
import About from "./components/About";
import HeroCard from "./components/HeroCard";
import Burger from "./components/Burger";
import Sectionpart from "./components/Section";
import ProjectCardList from "./components/ProjectCard/projectCardList";
import SocialFollow from "./components/SocialFollow";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { useTheme } from "./hooks/useTheme.js"; // Corrected import of the custom hook

// A separate, reusable component for the toggle button
const DarkModeToggle = ({ toggleTheme, theme }) => (
  <button onClick={toggleTheme} className={styles.darkModeToggle}>
    Switch to {theme === "light" ? "Dark" : "Light"} Mode
  </button>
);

function App() {
  const [theme, toggleTheme] = useTheme(); // Using the custom hook

  return (
    <Fragment>
      <div id="outer-container" className={styles.outerContainer}>
        <Burger />
        {/* ADD THE BUTTON BACK HERE */}
        <DarkModeToggle toggleTheme={toggleTheme} theme={theme} />

        <div id="page-wrap" className={styles.container}>
          <HeroCard />
          <About />
          <Sectionpart />
          <ProjectCardList />
          <ContactForm />
          <SocialFollow />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
