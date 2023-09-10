import React from "react";
import videobg from "./videobg.mp4";



const Water = () => {
  return (<section>
  <div className="videobg-wrapper">
      <div className="Watervideo">
        <video src={videobg} type="video/mp4"  autoPlay loop muted />
      </div>
  </div>
</section>
  );
};

export default Water;