// imports the single card and the data
import React from "react";
import ProjectCard from "../ProjectCard";
import projectInfo from "../projectInfo.js";
import styles from "./ProjectCardList.module.css";

const ProjectCardRender = () => {
  return (
    // Apply the grid layout class here
    <section className={styles.projectsGrid}>
      {projectInfo.map((project) => (
        /* THE ANCHOR: This div allows the Mosaic Spans to work! */
        <div key={project.id} className={styles.card}>
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.imgURL}
            url={project.url}
            description={project.description}
          />
        </div>
      ))}
    </section>
  );
};

// ✅ MANDATORY: This line makes the function available for other files to import.
export default ProjectCardRender;
