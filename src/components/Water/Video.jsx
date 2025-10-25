import React from "react";
import videobg from "../../assets/videos/videobg.mp4";
import styles from "./Video.module.css";


const Water = () => {
  return (
  <div className={styles.videobgWrapper}>
      <div className={styles.waterVideo}>
        <video src={videobg} type="video/mp4"  autoPlay loop muted />
      </div>
  </div>
  );
};

export default Water;