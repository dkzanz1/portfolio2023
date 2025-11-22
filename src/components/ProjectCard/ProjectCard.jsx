import React from "react";
import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types"; // Import PropTypes

const ProjectCard = ({ id, title, img, url, description }) => {
  console.log("ProjectCard props:", { id, title, img, url, description });

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardContentWrapper}>
        <img className={styles.projectCardImg} src={img} alt="project" />
        <h2 className={styles.projectCardTitle}>{title}</h2>
        <p className={styles.projectCardInfo}>{description}</p>
        <a
          className={styles.projectCardLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </a>
        <p className={styles.projectCardId}>{id}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  // Add prop types
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
