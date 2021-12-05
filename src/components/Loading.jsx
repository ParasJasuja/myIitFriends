import React from "react";
import "../Styles/Loading.css";

import LoopIcon from "@material-ui/icons/Loop";

function Loading() {
  return (
    <div className="LoadingBox">
      <LoopIcon fontSize="large" className="loading" />
    </div>
  );
}

export default Loading;
