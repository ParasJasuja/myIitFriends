import React from "react";
import "../Styles/ConnectionImageBox.css";

function ConnectionImageBox(props) {
  return (
    <div className="ConnectionImageBox">
      {props.selected && <span className="connection-selected-ind"></span>}
      <div className="connection-image-container" title={props.name}>
        <img src={props.imgUrl} className="connection-image" alt="" />
      </div>
    </div>
  );
}

export default ConnectionImageBox;
