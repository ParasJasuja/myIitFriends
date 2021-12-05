import React from "react";
import "../Styles/VideosGridContainer.css";

function VideosGridContainer(props) {
  return (
    <div className="VideosGridContainer">
      {props.heading && (
        <div className="box-container heading-grid-box">
          <h2 className="videos-heading">{props.heading}</h2>
        </div>
      )}
      {props.children}
    </div>
  );
}

export default VideosGridContainer;
