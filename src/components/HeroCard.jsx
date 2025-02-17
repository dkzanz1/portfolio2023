import React, { useEffect, useRef, useState } from "react";
import img from "./assets/mephoto.jpg";
import boatImage from "./assets/boat.svg"; // Assuming boat.svg is in the same directory
import styles from "./HeroCard.module.css";
import Water from "./Video";


function HeroCard() {
    const boatRef = useRef(null); // Ref for the boat element
    const videoContainerRef = useRef(null); // Ref for the video container
    const [boatLoaded, setBoatLoaded]= useState(false);

    useEffect(() => { // Use useEffect to run code after render
        const boat = boatRef.current;
        const videoContainer = videoContainerRef.current;
const handleMouseMove = (e) => { // Separate function
        if  (!boatLoaded || !boat || !videoContainer) return; // Check if elements exist
            
                const rect = videoContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const maxX = videoContainer.offsetWidth - boat.offsetWidth;
                const maxY = videoContainer.offsetHeight - boat.offsetHeight;

                const clampedX = Math.max(0, Math.min(x, maxX));
                const clampedY = Math.max(0, Math.min(y, maxY));

                boat.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
};
if (boat && videoContainer) {
    boat.onload = () => setBoatLoaded(true); // Set state when boat loads
    videoContainer.addEventListener('mousemove', handleMouseMove);
     return ()=> { 
        videoContainer.removeEventListener('mousemove', handleMouseMove);
     }
    }

    }, [boatLoaded]);

    return (
        <div className={styles.section}>
            <div className={styles.Herocard}>
                <div className={styles["hero-content"]}>
                    <Water className={styles.watervideo} />
                    <div className={styles.overlay}>
                        <img src={img} alt="Paul's Avatar" className={styles["circle-img"]} />
                        <h1 className={styles.name}><span>Hi,   </span><span>I'm Paul</span></h1>
                        <article className={styles.HeroBlurb}>
                            <h2>Web Developer<br /> who lives by the Sea, <br />I build websites that are as<br /> refreshing as the sea breeze<br />Dorset</h2>
                            <p className={styles.HeroInfo}>I build Crafted Bespoke Webpages<br />
                                using<strong> full stack development</strong></p>
                        </article>
                        <div className={styles["boat-container"]}> {/* Container for positioning */}
                            <img src={boatImage} alt="Cartoon Boat" className={styles.boat} ref={boatRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroCard;