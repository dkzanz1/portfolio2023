import React from "react";





 const ProjectCard = ({id, title, img, url, description }) => {
   // const  url  = props;
   const link = React.createElement('a', {href:url, target: '_blank'},'Visit Project');
return (<div className="projectcard-container">
              
                <div className="projectcard-item">
                 
                    <img className="projectcard-item img" src={img} alt="man"/>
                       <h2 className="projectcard-item-title">{title}</h2>
                       <p className="projectcard-id">{id}</p>
<<<<<<< HEAD
                       <p className="project-card-link" href={url} target='_blank' rel="noopener noreferrer">{link}</p>
=======
                       <a className="project-card-link" href={url} target='_blank' rel="noopener noreferrer">{link}</a>
>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
                       <p className="projectcard-item-info">{description}</p>
                 </div>
            </div>
         
    );
    
}

<<<<<<< HEAD
// console.log( ProjectCard);
=======
console.log( ProjectCard);
>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
export default ProjectCard;