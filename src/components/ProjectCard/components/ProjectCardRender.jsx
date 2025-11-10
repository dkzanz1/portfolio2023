// import the single card and the data
import React from "react";
import ProjectCard from "../ProjectCard.jsx";
import projectInfo from "../projectInfo.js";
import styles from "./ProjectCardRender.module.css";

const ProjectCardRender = () => {
  return (
    // Apply the grid layout class here
    <section className={styles.projectsGrid}>
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
    </section>
  );
};

export default ProjectCardRender;
