import React from "react";





 const ProjectCard = ({id, title, img, url, description }) => {
   // const  url  = props;
   const link = React.createElement('a', {href:url, target: '_blank'},'Visit Project');
return (
          <div className="projectcard-container">
            <div className="projectcard-item">    
              <img className="projectcard-item img" src={img} alt="man"/>
                <h2 className="projectcard-item-title">{title}</h2>
                <p className="projectcard-id">{id}</p>
                <div className="project-card-link" href={url} target='_blank' rel="noopener noreferrer">{link}</div>
                <p className="projectcard-item-info">{description}</p>
            </div>
          </div>
        
    );
}

console.log(ProjectCard);
export default ProjectCard;