import React from "react";
import styles from "./About.module.css";
// Import the asset directly for Vite optimization
import myPhoto from "../../assets/images/mephoto.jpg";
function About() {
  return (
    <>
      <section className={styles.aboutContainer} aria-labelledby="about-title">
        {/* The New Image Column */}
        <div className={styles.imageWrapper}>
          <img
            src={myPhoto}
            alt="Paul - Web Developer"
            className={styles.stickerImg}
          />
        </div>
        <article className={styles.Aboutblurb}>
          <h2 id="about-title">About:-</h2>
          <p className={styles.blurb}>
            &quot;Im a dedicated self-taught web developer with a passion for
            building functional and aesthetically pleasing websites. My approach
            combines a keen design sense with strong coding skills, honed
            through extensive self-study and hands-on projects. Im proficient in
            creating responsive layouts and optimizing website performance, and
            I strive to deliver high-quality results that exceed client
            expectations.&quot;
          </p>
        </article>
      </section>
    </>
  );
}
export default About;
