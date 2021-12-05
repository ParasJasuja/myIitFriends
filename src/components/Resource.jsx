import React from "react";
import "../Styles/Resource.css";
import GetAppIcon from "@material-ui/icons/GetApp";

function Resource(props) {
  return (
    <a href={props.link} className="Resource">
      <span>
        <h2 className="resource-heading">{props.heading}</h2>
        {props.discription && (
          <p className="sub-heading">{props.discription}</p>
        )}
      </span>
      <span>{props.download && <GetAppIcon />}</span>
    </a>
  );
}

export default Resource;
