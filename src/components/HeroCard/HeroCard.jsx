import React, { useEffect, useRef } from "react";
import Burger from "../../components/Burger";
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

    // 1. POSITION TRACKING
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // 2. NAUTICAL WEIGHT (The "Boat" Feel)
    // 0.02 is heavy/slow catch-up. 0.05 is a bit snappier.
    const speed = 0.005;

    const handleMouseMove = (e) => {
      const rect = videoContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Update where we WANT the boat to go
      targetX = e.clientX - centerX;
      targetY = e.clientY - centerY;
    };

    const animate = () => {
      // 3. THE PHYSICS (LERP)
      // Instead of jumping to the mouse, move a small % of the distance every frame
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      if (boatRef.current) {
        boatRef.current.style.transform = `translate3d(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px), 0)`;
      }

      // Keep the animation loop running
      requestAnimationFrame(animate);
    };

    // Start the loop and the listener
    const animationFrame = requestAnimationFrame(animate);
    videoContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className={styles.heroSection}
      aria-labelledby="hero-heading"
      ref={videoContainerRef}
    >
      <Burger />
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.arrow}>
          <span></span>
          <span></span>
        </div>
      </div>

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
          <h3>
            Web Developer who lives by the Sea, I build websites that are as
            refreshing as the sea breeze Dorset
          </h3>
          <p className={styles.HeroInfo}>
            I build Crafted Bespoke Webpages
            <br />
            using <strong>full stack development</strong>
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
