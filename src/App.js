import React, { Fragment } from "react";
import './Responsive.css';
import Card from "./components/HeroCard";
import Burger from "./components/Burger";
import Sectionpart from "./components/section";
import projectInfo from "./components/projectInfo"
import SocialFollow from "./SocialFollow.js";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
// import ContactForm from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Water from "./components/Video";


function createCard(projectInfo) {
  return(
     <ProjectCard
      key={projectInfo.id}
      id={projectInfo.id}
      title={projectInfo.title} 
      url={projectInfo.url}
      img = {projectInfo.imgURL}
      description = {projectInfo.description}
  />  
  );
}

function App(){
  return(
      <Fragment>
        <Burger />
        <Card />
        <Water />
        <About />
        <Sectionpart />
    {/*mapping throu projectInfo to create 
    dynamic response rather than hard coded
    via jsx array loop created before
    hard code example below*/}
      {projectInfo.map(createCard)}
      <ContactForm />
     
      <SocialFollow />
      <Footer />
    </Fragment>   //container ends
  );
}

export default App;
