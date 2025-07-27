// import React from "react";
// import styles from "./ProjectCard.module.css";

//  const ProjectCard = ({id, title, img, url, description }) => {
//   console.log("ProjectCard props:", { id, title, img, url, description }); // Added this line
 
// return (
//           <div className={styles.projectcardContainer}>
//             <div className={styles.projectcardItem}>    
//               <img className={styles.projectcardItemImg} 
//               src={img} 
//               alt="avitar of author"/>
//                 <h2 className={styles.projectcardItemTitle}>{title}</h2>
//                 <p className={styles.projectcardId}>{id}</p>
//                 <a
//                  className={styles.projectcardLink} 
//                 href={url} 
//                 target='_blank' 
//                 rel="noopener noreferrer"
//                 >
//                 Visit Project
//                 </a>
//                 <p className={styles.projectcardItemInfo}>{description}</p>
//             </div>
//           </div>
        
//     );
// }

// console.log(ProjectCard);
// export default ProjectCard;
// ProjectCard.js
import React from "react";
import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types"; // Import PropTypes

const ProjectCard = ({ id, title, img, url, description }) => {
  console.log("ProjectCard props:", { id, title, img, url, description });

  return (
    <div className={styles.projectcardContainer}>
      <div className={styles.projectcardItem}>
        <img className={styles.projectcardItemImg} src={img} alt="project" />
        <h2 className={styles.projectcardItemTitle}>{title}</h2>
        <p className={styles.projectcardId}>{id}</p>
        <a
          className={styles.projectcardLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </a>
        <p className={styles.projectcardItemInfo}>{description}</p>
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