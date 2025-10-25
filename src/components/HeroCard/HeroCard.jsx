import React, { useEffect, useRef } from "react";
import img from "../../assets/images/mephoto.jpg";
import boatImage from "../../assets/images/boat.svg";
import styles from "./HeroCard.module.css";
import Water from "../Water/Video.jsx";

function HeroCard() {
    const boatRef = useRef(null);
    const videoContainerRef = useRef(null);

    useEffect(() => {
        const boat = boatRef.current;
        const videoContainer = videoContainerRef.current;

        if (!boat || !videoContainer) return;

        const handleMouseMove = (e) => {
            const rect = videoContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const maxX = videoContainer.offsetWidth - boat.offsetWidth;
            const maxY = videoContainer.offsetHeight - boat.offsetHeight;
            const clampedX = Math.max(0, Math.min(x, maxX));
            const clampedY = Math.max(0, Math.min(y, maxY));

            boat.style.left = `${clampedX}px`;
            boat.style.top = `${clampedY}px`;
        };

        videoContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            videoContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.section}>
            <div className={styles.Herocard}>
                <div className={styles.heroContent} ref={videoContainerRef}>
                    <Water className={styles.watervideo} />
                    <div className={styles.overlay}>
                
                        <img src={img} alt="Paul's Avatar" className={styles["circle-img"]} />
                        <h1 className={styles.name}><span>Hi,   </span><span>I'm Paul</span></h1>
                        <article className={styles.HeroBlurb}>
                            <h2>Web Developer<br /> who lives by the Sea, <br />I build websites that are as<br /> refreshing as the sea breeze<br />Dorset</h2>
                            <p className={styles.HeroInfo}>I build Crafted Bespoke Webpages<br />
                                using<strong> full stack development</strong></p>
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