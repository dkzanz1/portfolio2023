import React from "react";
import styles from "./About.module.css";
// Assets imported directly for Vite optimization
import myPhotoAvif from "../../assets/images/aboutphoto.jpg?format=avif&width=680&quality=70";
import myPhotoWebp from "../../assets/images/aboutphoto.jpg?format=webp&width=680&quality=80";
import myPhotoJpg from "../../assets/images/aboutphoto.jpg?width=680&quality=75";
function About() {
  return (
    <>
      <section className={styles.aboutContainer} aria-labelledby="about-title">
        {/* The New Image Column */}
        <div className={styles.imageWrapper}>
          <picture className={styles.pictureContainer}>
            <source srcSet={myPhotoAvif} type="image/avif" />
            <source srcSet={myPhotoWebp} type="image/webp" />
            <img
              src={myPhotoJpg}
              alt="Paul -Full stack web developer"
              className={styles.stickerImg}
              width="340"
              height="425" /* Matches your 4:5 aspect ratio constraint precisely */
              loading="lazy"
            />
          </picture>
        </div>
        <article className={styles.Aboutblurb}>
          <h2 id="about-title" className={styles.sectionTitle}>
            About
          </h2>
          <p className={styles.blurb}>
            &quot;I&apos;m a full-stack developer specializing in building
            production-ready web applications with React, Vite, and rigid modern
            architectures, currently transitioning my ecosystem to TypeScript.
            Coming from a high-pressure background managing complex operational
            environments, I translate rigorous systems management and calm
            problem-solving into clean, optimized, and semantic code. Beyond
            technical execution, I bring a mature perspective that serves as a
            force multiplier for engineering teams,reducing management overhead
            through strict workflow discipline and effective
            communication.&quot;&quot;
          </p>
        </article>
      </section>
    </>
  );
}
export default About;
