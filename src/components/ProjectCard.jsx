import React from "react";


function ProjectCard(props) {
return (<div className="projectcard">
            <div className="content">
        <div>
        <img className="picture" src={props.img} alt="man" />
            <div className="wrapper">       
                <h2 className="title">{props.title}</h2>
                <p>{props.id}</p>
                <p className="info">{props.description}</p>
            </div>
         </div>
            </div>
        </div>
    );
}


export default ProjectCard;