import React from "react";
import img from "./assets/mephoto.jpg";
import boatImage from "./assets/boat.svg"; // Assuming boat.svg is in the same directory
import styles from "./HeroCard.module.css";
import Water from "./Video";


function HeroCard() {
    return (
        <div className={styles.section}>
            <div className={styles.Herocard}>
                <div className={styles["hero-content"]}>
                <Water  className={styles.watervideo}/>
                <div className={styles.overlay}> 
                    <img src={img} alt="Paul's Avatar" className={styles["circle-img"]} />
                    <h1 className={styles.name}><span>Hi,   </span><span>I'm Paul</span></h1>
                    <article className={styles.HeroBlurb}>
                        <h2>Web Developer<br /> who lives by the Sea, <br />I build websites that are as<br /> refreshing as the sea breeze<br />Dorset</h2>
                        <p className={styles.HeroInfo}>I build Crafted Bespoke Webpages<br />
                            using<strong> full stack development</strong></p>
                    </article>
                    <div className={styles["boat-container"]}> {/* Container for positioning */}
                        <img src={boatImage} alt="Cartoon Boat" className={styles.boat} />
                       </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default HeroCard;