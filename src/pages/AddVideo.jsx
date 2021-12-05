import React, { useState } from "react";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import "../Styles/AddVideo.css";

function AddVideo() {
  const [videoData, setVideoData] = useState({
    videoPath: "",
    thumbnailPath: "",
  });

  const thumbnailChangeHandler = (e) => {
    const key = e.target.name;
    const formData = new FormData();
    console.log(formData);
    formData.append("thumbnail", e.target.files[0]);
    console.log(formData);
    if (e.target.files.length !== 0) {
      const path = URL.createObjectURL(e.target.files[0]);
      setVideoData((prvs) => ({
        ...prvs,
        [key]: path,
      }));
    }
  };

  return (
    <div className="AddVideo">
      {/* <div className="one-card-container">
        <div className="box-container">
          <VideoThumbnailCard
            videoThumbnail={videoData.thumbnailPath}
            profileThumbnail="https://picsum.photos/32/32"
          />
        </div>
      </div> */}
      <form className="addVideoForm">
        <div className="filesUpload">
          <span>
            <label className="addFile" htmlFor="addThumbnail">
              {videoData.thumbnailPath.length !== 0 ? (
                <img
                  className="thumbnail"
                  src={videoData.thumbnailPath}
                  alt=""
                />
              ) : (
                <span>+</span>
              )}
            </label>
            Thumbnail
            <input
              id="addThumbnail"
              type="file"
              accept=".png,.jpg,.jpeg"
              name="thumbnailPath"
              onChange={thumbnailChangeHandler}
            />
          </span>
          <span>
            <label className="addFile" htmlFor="addVideo">
              {videoData.videoPath.length !== 0 ? (
                <video className="thumbnail" src={videoData.videoPath} alt="" />
              ) : (
                <span>+</span>
              )}
            </label>
            <input
              id="addVideo"
              type="file"
              accept="video/*"
              name="videoPath"
              onChange={thumbnailChangeHandler}
            />
            Video
          </span>
          <br />
        </div>
        <br />
        <label htmlFor="videoTitle">Title</label>
        <input
          id="videoTitle"
          className="videoTitle"
          type="text"
          placeholder="Title"
        />
        <br />
        <label htmlFor="videoDiscription">Discription</label>
        <textarea
          className="videoDiscription"
          id="videoDiscription"
          placeholder="Discription"
        />
        <br />
        <button className="btn bgColor loginButton" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
