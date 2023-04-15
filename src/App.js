import React from "react";
import './Responsive.css';
import Card from "./components/HeroCard";
import Burger from "./components/Burger";
import projectInfo from "./components/projectInfo"
import SocialFollow from "./SocialFollow.js";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Water from "./components/Video";


function createCard(projectInfo) {
  return(
     <ProjectCard
      key={projectInfo.id}
      id={projectInfo.id}
      title={projectInfo.title} 
      img = {projectInfo.imgURL}
      description = {projectInfo.description}
  />  
  );
}

function App(){
  return(
      <>
        
        <Burger />
        
        <Card />
        <Water />

        <About />
    {/*mapping throu projectInfo to create 
    dynamic resaponse rather than hard coded
    via jsx array loop created before
    hard code example below*/}
      {projectInfo.map(createCard)}
      <ContactForm />
      <SocialFollow />
      <Footer />
    </>   //container ends
  );
}

export default App;
