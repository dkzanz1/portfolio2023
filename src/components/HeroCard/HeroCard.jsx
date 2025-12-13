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

    const handleMouseMove = (e) => {
      const rect = videoContainer.getBoundingClientRect();
      // 1.Calculates mouse position relative to the container's center//
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // 2.Sets boat position to follow mouse, clamped within container bounds//
      const dx = e.clientX - rect.left - centerX;
      const dy = e.clientY - rect.top - centerY;
      // 3.Adjust sensitivity factor for smoother movement//
      // 4.Dampening factor mean the boat moves 3% of the distance the mouse moves//
      const dampeningFactor = 0.03;
      // 3. Calculate the new parallax position (offset from center)
      // We are *offsetting* the boat relative to its center position// The boat-animation-wrapper should be used to position the boat,
      // but for simplicity, let's target the boat directly using 'transform'.

      const offsetX = dx * dampeningFactor;
      const offsetY = dy * dampeningFactor;
      // 4. Apply the position using CSS transform for better performance (GPU acceleration)
      // This centers the boat (translateX/Y(-50%)) and then applies the parallax offset.
      boat.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    };

    videoContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.Herocard}>
        <div className={styles.heroContent} ref={videoContainerRef}>
          <WaterVideo className={styles.watervideo} />
          <div className={styles.overlay}>
            <img
              src={img}
              alt="Paul's Avatar"
              className={styles["circle-img"]}
            />
            <h2 className={styles.name}>
              <span>Hi, </span>
              <span>I am Paul</span>
            </h2>
            <article className={styles.HeroBlurb}>
              <h3>
                Web Developer
                <br /> who lives by the Sea, <br />I build websites that are as
                <br /> refreshing as the sea breeze
                <br />
                Dorset
              </h3>
              <p className={styles.HeroInfo}>
                I build Crafted Bespoke Webpages
                <br />
                using<strong> full stack development</strong>
              </p>
            </article>
            <div className={styles["boat-container"]}>
              <img
                src={boatImage}
                alt="Cartoon Boat"
                className={styles.boat}
                ref={boatRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
