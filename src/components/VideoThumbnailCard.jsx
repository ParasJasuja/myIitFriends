import React from "react";
import "../Styles/VideoThumbnailCard.css";

function VideoThumbnailCard(props) {
  return (
    <div className="VideoThumbnailCard">
      {/* <div className="video-card-thumbnail-container"> */}
      <a href="/" className="video-card-thumbnail-container">
        <img
          className="video-card-thumbnail"
          src={props.videoThumbnail}
          alt=""
        />
      </a>
      {/* </div> */}
      <div className="video-card-detail">
        <img
          className="video-card-detail-image"
          src={props.profileThumbnail}
          alt=""
        />

        <div className="video-card-detail-text">
          <h3>Title of the Video will be here ......</h3>
          <div>
            <p>IIT Kanpur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnailCard;
