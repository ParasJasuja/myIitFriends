import React, { useState } from "react";
import "../Styles/VideoPlaybackBox.css";
import ConnectButton from "./ConnectButton";

function VideoPlaybackBox(props) {
  const [connected, setConnected] = useState({
    connected: false,
  });

  const toggleConnect = (e, id) => {
    e.preventDefault();
    setConnected((prvs) => {
      return {
        connected: !prvs.connected,
      };
    });
  };

  return (
    <div className="VideoPlaybackBox">
      <div className="video-container">
        <video className="current-video" autoPlay controls>
          <source
            src="http://techslides.com/demos/sample-videos/small.mp4"
            type="video/mp4"
          />
          Unable to Load Video
        </video>
      </div>
      <h1 className="video-title">Title of video here .......</h1>
      <div className="channel-info">
        <div className="channel-info-wraper">
          <img
            className="circle-image-thumbnail"
            src="https://picsum.photos/58/58"
            alt=""
          />
          <span>
            <h3>Name Surname</h3>
            <p>IIT Kanpur</p>
          </span>
        </div>
        <div className="functional-btns">
          <button onClick={props.toggleCommentBox}>Comments</button>
          <ConnectButton connected={connected} toggleConnect={toggleConnect} />
          {/* <button className="bgColor">CONNECT</button> */}
        </div>
      </div>
    </div>
  );
}

export default VideoPlaybackBox;
