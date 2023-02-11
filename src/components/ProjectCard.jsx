import React from "react";


function ProjectCard(props) {
return (
        <div className="card">
        <div className="top">
        <h2 className="title">{props.title}</h2>
        <img classname="picture" src={props.img} alt ="man"/>
        </div>
        <div className="bottom">
        <p className="info">{props.description}</p>
        </div>
        </div>
    );
}


export default ProjectCard;