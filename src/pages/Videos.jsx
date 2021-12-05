import React from "react";
import "../Styles/Videos.css";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import VideosGridContainer from "../Hoc/VideosGridContainer";

function Videos(props) {
  return (
    <div className="Videos">
      <VideosGridContainer heading="Videos">
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
      </VideosGridContainer>
    </div>
  );
}

export default Videos;
