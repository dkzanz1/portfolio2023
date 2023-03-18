import React from "react";


function ProjectCard(props) {
return (<div className="projectcard">
             <div>
                 <div className="content">
                    <img className="projectPicture" src={props.img} alt="man"/>
                       <h2 className="project-title">{props.title}</h2>
                       <p>{props.id}</p>
                       <p className="project-info">{props.description}</p>
                 </div>
               </div>
            </div>
    );
}


export default ProjectCard;