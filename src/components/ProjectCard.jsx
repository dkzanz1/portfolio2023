import React from "react";
import styles from "./ProjectCard.module.css";

 const ProjectCard = ({id, title, img, url, description }) => {
   // const  url  = props;
  //  const link = React.createElement('a', {href:url, target: '_blank'},'Visit Project');
return (
          <div className={styles.projectcardContainer}>
            <div className={styles.projectcardItem}>    
              <img className={styles.projectcardItemImg} src={img} alt="man"/>
                <h2 className={styles.projectcardItemTitle}>{title}</h2>
                <p className={styles.projectcardId}>{id}</p>
                <a
                 className={styles.projectcardLink} 
                href={url} 
                target='_blank' 
                rel="noopener noreferrer"
                >
                Visit Project
                </a>
                <p className={styles.projectcardItemInfo}>{description}</p>
            </div>
          </div>
        
    );
}

console.log(ProjectCard);
export default ProjectCard;