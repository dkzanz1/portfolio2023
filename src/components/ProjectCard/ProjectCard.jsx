import React, { useRef, useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types"; // Import PropType
/* NOTE: 'id' is intentionally excluded from props here to satisfy ESLint. 
  It is still used as a 'key' in the parent (ProjectCardList) for React's 
  reconciliation process, but since we aren't rendering the ID 
  visually, passing it here as a prop creates an 'unused variable' error.
*/
const ProjectCard = ({ title, img, url, description }) => {
  const cardRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      // Get the card's position relative to the viewport
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate the center of the card relative to the center of the screen
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = viewportHeight / 2;

      // Standard 8 Physics: .95 Dampening
      // We only want 5% of the scroll speed to apply to the parallax (1 - 0.95 = 0.05)
      const diff = (cardCenter - screenCenter) * 0.05;

      setOffset(diff);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);
  return (
    <div className={styles.projectCardContainer}>
      <div
        className={styles.projectCardContentWrapper}
        style={{ "--parallax-offset": `${offset}px` }}
      >
        <img
          className={styles.projectCardImg}
          src={img}
          alt="project"
          style={{ transform: `scale(1.2) translateY(${offset}px)` }}
        />
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
        {/* <p className={styles.projectCardId}>{id}</p> */}
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
