import React, { useState } from "react";
import "../Styles/ViewVideo.css";
import CommentBox from "../components/CommentBox";
import VideoPlaybackBox from "../components/VideoPlaybackBox";
import VideosGridContainer from "../Hoc/VideosGridContainer";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import { useParams } from "react-router-dom";

function ViewVideo(props) {
  const [showComments, setShowComments] = useState(false);
  let { id } = useParams();
  console.log(id);

  const handleToggleCommentBox = () => {
    setShowComments((prvs) => {
      return !prvs;
    });
  };

  return (
    <div className="ViewVideo">
      <VideoPlaybackBox toggleCommentBox={handleToggleCommentBox} />
      {showComments && <CommentBox toggleCommentBox={handleToggleCommentBox} />}
      <VideosGridContainer heading="More Videos">
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

export default ViewVideo;
