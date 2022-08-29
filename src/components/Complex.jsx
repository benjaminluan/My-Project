import React from "react";
import "./Complex.css";
import video from "../videos/video.mp4";
const Complex = () => {
  return (
    <div id="application">
      <div className="application--container">
        <h2 className="application__header">To real-world applications.</h2>
        <div className="application__video--container">
          <video src={video} autoPlay="true" muted="true" loop="true"></video>
        </div>
      </div>
    </div>
  );
};

export default Complex;
