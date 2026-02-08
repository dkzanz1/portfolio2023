import React from "react";
import videobg from "../../assets/videos/videobg.mp4";
import styles from "./WaterVideo.module.css";

const WaterVideo = () => {
  return (
    <div className={styles.videobgWrapper}>
      <div className={styles.waterVideo}>
        <video
          src={videobg}
          type="video/mp4"
          autoPlay
          loop
          muted
          style={{
            position: "absolute" /* Take it out of the document flow */,
            top: 0,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default WaterVideo;
