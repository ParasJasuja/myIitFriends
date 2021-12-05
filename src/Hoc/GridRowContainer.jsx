import React from "react";
import "../Styles/GridRowContainer.css";

function GridRowContainer(props) {
  return <div className="GridRowContainer">{props.children}</div>;
}

export default GridRowContainer;
