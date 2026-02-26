/**
 * HeroCard Component
 *
 * Displays a dynamic hero section with a personal photo, name, blurb,
 * a background video, and an interactive boat element that follows the mouse.
 * It leverages React hooks for managing element references and mouse interaction.
 *
 * @returns {JSX.Element} The HeroCard component.
 */

import React, { useEffect, useRef } from "react";
import img from "../../assets/images/mephoto.jpg";
import boatImage from "../../assets/images/boat.svg";
import styles from "./HeroCard.module.css";
import WaterVideo from "../WaterVideo/WaterVideo.jsx";

function HeroCard() {
  const boatRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const boat = boatRef.current;
    const videoContainer = videoContainerRef.current;

    if (!boat || !videoContainer) return;
    // LINE A: Get the container's size and position on the screen.
    const handlePassiveMove = (e) => {
      const rect = videoContainer.getBoundingClientRect();
      // LINE A: Get the container's size and position on the screen.
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // LINE C: Calculate mouse position relative to the container.
      // e.clientX is where the mouse is on the WHOLE screen.
      // rect.left is where the container starts.
      // We subtract the center to make "0" the middle of the box.
      // 2.Sets boat position to follow mouse, clamped within container bounds//
      const dx = e.clientX - rect.left - centerX;
      const dy = e.clientY - rect.top - centerY;
      // 3.Adjust sensitivity factor for smoother movement//
      // 4.Dampening factor mean the boat moves 95% of the distance the mouse moves until it slowly catches up//
      const dampeningFactor = 0.95; // Adjust this value to make the boat more or less responsive
      // LINE E: Final offset distance.
      const offsetX = dx * dampeningFactor;
      const offsetY = dy * dampeningFactor;
      // 4. Apply the position using CSS transform for better performance (GPU acceleration)
      // This centers the boat (translateX/Y(-50%)) and then applies the parallax offset.
      //   boat.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
      boatRef.current.style.transform = `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), 0)`;
    };

    videoContainer.addEventListener("mousemove", handlePassiveMove);

    return () => {
      videoContainer.removeEventListener("mousemove", handlePassiveMove);
    };
  }, []);

  return (
    <section
      className={styles.heroSection}
      aria-labelledby="hero-heading"
      ref={videoContainerRef}
      /* <--- THIS above RE-ACTIVATES THE BOAT */
    >
      {/* 2. Visually Hidden H1 for SEO/A11y Compliance */}
      <h1 id="hero-heading" className={styles.srOnly}>
        Paul - Full Stack Web Developer Portfolio
      </h1>
      <WaterVideo className={styles.watervideo} />
      <div className={styles.overlay}>
        <img src={img} alt="Paul's Avatar" className={styles["circle-img"]} />
        <h2 className={styles.name}>
          <span>Hi, </span>
          <span>Im Paul</span>
        </h2>
        <article className={styles.HeroBlurb}>
          {/*removed all br for better flow*/}
          <h3>
            Web Developer who lives by the Sea, I build websites that are as
            refreshing as the sea breeze Dorset
          </h3>
          <p className={styles.HeroInfo}>
            I build Crafted Bespoke Webpages
            <br />
            using<strong> full stack development</strong>
          </p>
        </article>
        <div className={styles["boat-container"]} aria-hidden="true">
          <div className={styles["boat-animation-wrapper"]} ref={boatRef}>
            <img src={boatImage} alt="" className={styles.boat} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
