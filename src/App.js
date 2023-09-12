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
<<<<<<< HEAD
// import ContactForm from "./components/Contact";
import ContactForm from "./components/ContactForm";
=======
import ContactForm from "./components/Contact";
>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
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
<<<<<<< HEAD
      <Fragment>
=======
      <Fragment className="container">
>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
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
<<<<<<< HEAD
     
=======
>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
      <SocialFollow />
      <Footer />
    </Fragment>   //container ends
  );
}

export default App;
