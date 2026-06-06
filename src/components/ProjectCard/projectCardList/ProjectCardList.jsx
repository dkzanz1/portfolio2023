// imports the single card and the data
import React from "react";
import ProjectCard from "../ProjectCard";
import projectInfo from "../projectInfo.js";
import styles from "./ProjectCardList.module.css";

const ProjectCardRender = () => {
  return (
    // Apply the grid layout class here
    <section className={styles.projectsGrid}>
      {projectInfo.map((project, index) => {
        // Dynamically add the heroCard class to the very first card item
        const cardClassName =
          index === 0 ? `${styles.card} ${styles.heroCard}` : styles.card;
        return (
          /* WRAPPER DIV: This is what the CSS 'span' logic targets */
          <div key={project.id} className={cardClassName}>
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.imgURL}
              url={project.url}
              description={project.description}
            />
          </div>
        );
      })}
    </section>
  );
};

// ✅ MANDATORY: This line makes the function available for other files to import.
export default ProjectCardRender;
