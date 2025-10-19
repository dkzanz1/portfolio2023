import  React from "react";
import styles from "./About.module.css";

function About() {
    return<><div className={styles.aboutContainer }>
    <div className={styles.Aboutblurb}>
        <h1>About:-</h1>
        <p className={styles.blurb}>
        "I'm a dedicated self-taught web developer with a passion for building functional and aesthetically pleasing websites. My approach combines a keen design sense with strong coding skills, honed through extensive self-study and hands-on projects. 
        I'm proficient in creating responsive layouts and optimizing website performance,
         
         and I strive to deliver high-quality results that exceed client expectations."


        </p>
    </div>
    </div></>
}
export default About;