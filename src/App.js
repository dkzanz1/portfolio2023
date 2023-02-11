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

function createCard(projectInfo) {
  return<ProjectCard title={projectInfo.title} 
    img = {projectInfo.imgURL}
    description = {projectInfo.description}
  />;
}
function App(){
  return(
      <>
        <Logo />
        <Nav />
        <Burger />
        <HeroCard />
    {/*mapping throu projectInfo to create 
    dynamic resaponse rather than hard coded
    via jsx array loop created before
    hard code example below*/}
      {projectInfo.map(createCard)}
      {/* <ProjectCard
      title = {projectInfo[0].title}
      img = {projectInfo[0].imgURL}
      description={projectInfo[0].description}
       /> */}
      <SocialFollow />
      <Footer />
    </>   //container ends
  );
}

export default App;
