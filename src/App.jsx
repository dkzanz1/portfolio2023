// File: src/App.jsx
import React, { Fragment } from "react";
import styles from "./App.module.css";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import Burger from "./components/Burger/Burger.jsx";
import Sectionpart from "./components/Section/Section.jsx";
import projectInfo from "./components/ProjectCard/projectInfo.js";
import SocialFollow from "./components/SocialFollow/SocialFollow.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProjectCardRender from "./components/ProjectCard/ProjectCardRender.jsx";
// import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";
import About from "./components/About/About.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { useTheme } from "./hooks/useTheme.js"; // Correct import of the custom hook
// import ProjectInfo from "./components/ProjectCard/projectInfo.js";

// A separate, reusable component for the toggle button
const DarkModeToggle = ({ toggleTheme, theme }) => (
  <button onClick={toggleTheme} className={styles.darkModeToggle}>
    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
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
          <ProjectCardRender/>
          <ContactForm />
          <SocialFollow />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;