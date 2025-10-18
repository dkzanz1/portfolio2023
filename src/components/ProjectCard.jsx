
import React from "react";
import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types"; // Import PropTypes

const ProjectCard = ({ id, title, img, url, description }) => {
  console.log("ProjectCard props:", { id, title, img, url, description });

  return (
      <div className={styles.projectcardItem}>
      <div className={styles.imageWrapper}>
        <img className={styles.projectcardItemImg} src={img} alt="project" />
        <h2 className={styles.projectcardItemTitle}>{title}</h2>
        <p className={styles.projectcardItemInfo}>{description}</p>
         <a
          className={styles.projectcardLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </a>
        <p className={styles.projectcardId}>{id}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = { // Add prop types
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;