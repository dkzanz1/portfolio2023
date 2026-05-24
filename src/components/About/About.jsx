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
            alt="Paul -Full stack web developer"
            className={styles.stickerImg}
          />
        </div>
        <article className={styles.Aboutblurb}>
          <h2 id="about-title" className={styles.sectionTitle}>
            About
          </h2>
          <p className={styles.blurb}>
            &quot;I&apos;m a full-stack developer specializing in building
            production-ready web applications with React, Vite, and rigid modern
            architectures. Coming from a high-pressure background managing
            complex operational environments, I translate that fast-paced
            problem-solving and rigorous systems management directly into highly
            optimized, clean, and semantic code.&quot;&quot;
          </p>
        </article>
      </section>
    </>
  );
}
export default About;
