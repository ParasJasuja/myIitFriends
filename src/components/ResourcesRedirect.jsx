import React from "react";
import "../Styles/ResourcesRedirect.css";

function ResourcesRedirect(props) {
  return (
    <div className="ResourcesRedirect">
      <span>
        <h3>{props.name}</h3>
        {props.upload && <p>Upload</p>}
      </span>
      <a className="redirect-to-more" href="/">
        View More
      </a>
    </div>
  );
}

export default ResourcesRedirect;
