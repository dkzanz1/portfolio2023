import React, { useEffect, useRef, useState } from "react";
import Burger from "../../components/Burger";
import imgNoLight from "../../assets/images/herophoto.jpg?width=680&quality=75";
import imgMinBlue from "../../assets/images/halfmehalfrobot.jpeg?width=680&quality=75";
import imgBlueLight from "../../assets/images/halfmehalfrobotblue.jpeg?width=680&quality=75";
import imgMinYel from "../../assets/images/halfmehalfrobotyel.jpeg?width=680&quality=75";
import imgYellowLight from "../../assets/images/halfmehalfrobotyellow.jpeg?width=680&quality=75";

import boatImage from "../../assets/images/boat.svg";
import styles from "./HeroCard.module.css";
import WaterVideo from "../WaterVideo/WaterVideo.jsx";

function HeroCard({ theme }) {
  const boatRef = useRef(null);
  const videoContainerRef = useRef(null);

  // 1. Morph Phase State ('base' -> 'minBlue' -> 'blueLight')
  const [morphPhase, setMorphPhase] = useState("base");
  // const [themePhase, setThemePhase] = useState("dark"); // Track theme transitions ('dark' | 'minYel' | 'yellowLight')
  const [yellowPhase, setYellowPhase] = useState("none");

  useEffect(() => {
    // 1. Force web page to always load in dark mode
    document.documentElement.setAttribute("data-theme", "dark");

    // PHASE 2: Morph to imgMinBlue (starts almost immediately, transitions over 10s)
    const timer1 = setTimeout(() => {
      setMorphPhase("minBlue");
    }, 100);

    // PHASE 3: Morph to imgBlueLight (starts 10s later, transitions over 5s)
    const timer2 = setTimeout(() => {
      setMorphPhase("blueLight");
    }, 10100);

    // LERP Physics logic
    const boat = boatRef.current;
    const videoContainer = videoContainerRef.current;
    if (!boat || !videoContainer) return;

    // 1. POSITION TRACKING
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.0095;

    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Update where we WANT the boat to go
      targetX = (e.clientX - centerX) * 0.75;
      targetY = (e.clientY - centerY) * 0.75;
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
      clearTimeout(timer1);
      clearTimeout(timer2);
      cancelAnimationFrame(animationFrame);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 3. PLACE IT HERE -> Theme Prop Listener (Switches off Blue, turns on Yellow)
  useEffect(() => {
    let timer;

    if (theme === "light") {
      // Clear dark-mode blue active state so blue doesn't stick around underneath
      setMorphPhase("base");

      // Start light-mode yellow morph
      setYellowPhase("minYel");
      timer = setTimeout(() => {
        setYellowPhase("yellowLight");
      }, 5000);
    } else {
      // Clear yellow overlays when toggling back to dark mode
      setYellowPhase("none");

      // Restore dark-mode blue state
      setMorphPhase("blueLight");
    }

    return () => clearTimeout(timer);
  }, [theme]);

  // Helper or handler for light theme toggle (can be tied to your Theme toggle button)

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
      <WaterVideo className={styles.waterVideo} />

      <div className={styles.overlay}>
        <div className={styles.avatarWrapper}>
          {/* Base normal avatar */}
          <img
            src={imgNoLight}
            alt="Paul Zolik - normal portrait hand-drawn sketch"
            className={`${styles.circleImg} ${styles.imgBase}`}
          />
          {/* 2. Min Blue (Morphs in over 10s) */}
          <img
            src={imgMinBlue}
            alt="Paul Zolik - min cybernetic blue"
            className={`${styles.circleImg} ${styles.imgMinBlue} ${
              morphPhase === "minBlue" || morphPhase === "blueLight"
                ? styles.active
                : ""
            }`}
          />

          {/* 3. Full Blue Light (Morphs in over 5s) */}
          <img
            src={imgBlueLight}
            alt="Paul Zolik - full cybernetic blue light"
            className={`${styles.circleImg} ${styles.imgBlueLight} ${
              morphPhase === "blueLight" ? styles.active : ""
            }`}
          />
          {/* 4. Min Yellow (Theme toggle trigger) */}
          <img
            src={imgMinYel}
            alt="Paul Zolik - min yellow light"
            className={`${styles.circleImg} ${styles.imgMinYel} ${
              yellowPhase === "minYel" || yellowPhase === "yellowLight"
                ? styles.active
                : ""
            }`}
          />
          {/* 5. Full Yellow Light (Morphs in 5s after theme toggle) */}
          <img
            src={imgYellowLight}
            alt="Paul Zolik - full yellow light"
            className={`${styles.circleImg} ${styles.imgYellowLight} ${
              yellowPhase === "yellowLight" ? styles.active : ""
            }`}
          />
        </div>
        <h2 className={styles.name}>
          <span>Hi, </span>
          <span>Im Paul</span>
        </h2>
        <article className={styles.heroBlurb}>
          <h3>
            Web Developer who lives by the Sea, I build websites that are as
            refreshing as the sea breeze Dorset
          </h3>
          <p className={styles.heroInfo}>
            I build Crafted Bespoke Webpages
            <br />
            using <strong>full stack development</strong>
          </p>
        </article>

        <div className={styles.boatContainer} aria-hidden="true">
          <div className={styles.boatAnimationWrapper} ref={boatRef}>
            <img src={boatImage} alt="" className={styles.boat} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
