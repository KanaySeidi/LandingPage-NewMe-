import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div>
      <div className="video-section">
        <div className="video-container">
          <div className="video-content">
            <h2>Результаты учеников</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FPZeN4pR1S4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
