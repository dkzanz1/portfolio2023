import React from "react";
import Nav from "./components/Nav";
import './Responsive.css';
import HeroCard from "./components/HeroCard";
import Logo from "./components/Logo";
import Burger from "./components/Burger";
import projectInfo from "./components/projectInfo"
import SocialFollow from "./SocialFollow.js";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import ContactForm from "./components/Contact";

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
        <Logo />
        <Nav />
        <Burger />
        <HeroCard />
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
