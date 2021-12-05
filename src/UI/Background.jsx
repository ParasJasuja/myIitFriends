import React from "react";
import "../Styles/Background.css";

function Background(props) {
  return <div className="Background" onClick={props.clicked}></div>;
}

export default Background;
