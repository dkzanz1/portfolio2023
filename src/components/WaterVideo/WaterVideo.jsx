import React from "react";
import videobg from "../../assets/videos/videobg.mp4";
import styles from "./WaterVideo.module.css";

const WaterVideo = () => {
  return (
    <div className={styles.videobgWrapper}>
      <div className={styles.waterVideo}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoElement}
          /* Temporarily comment out the poster if you don't have the image yet */
          /* poster="/me-poster.jpg" */
        >
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default WaterVideo;
