import React from "react";
import "../Styles/ProfileContentView.css";
import ProfileBar from "../components/ProfileBar";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import VideosGridContainer from "../Hoc/VideosGridContainer";
import ResourcesRedirect from "../components/ResourcesRedirect";

function ProfileContentView(props) {
  return (
    <div className="ProfileContentView">
      <ProfileBar />
      <VideosGridContainer heading="Videos">
        <div className="box-container">
          <ResourcesRedirect upload name="Notes" />
          <ResourcesRedirect upload name="Books" />
          <ResourcesRedirect upload name="References" />
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

export default ProfileContentView;
