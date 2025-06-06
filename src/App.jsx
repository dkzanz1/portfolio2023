// File: src/component/App.jsx
App.js
import React, { Fragment } from "react";
import styles from "./App.module.css";//imported as a module object
import HeroCard from "./components/HeroCard.jsx";
import Burger from "./components/Burger.jsx";
import Sectionpart from "./components/section.jsx";
import projectInfo from "./components/projectInfo.js";
import SocialFollow from "./components/SocialFollow.jsx";
import Footer from "./components/Footer.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import About from "./components/About.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  return (
    <Fragment>
      <div id="outer-container" className={styles.container}>
        <Burger />
        <div id="page-wrap" className={styles.container}>
        <HeroCard />
        <About />
        <Sectionpart />
        {projectInfo.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.imgURL}
            url={project.url}
            description={project.description}
          />
        ))}
        <ContactForm />
        <SocialFollow />
        <Footer />
      </div>
      </div>
    </Fragment>
  );
}

export default App;

