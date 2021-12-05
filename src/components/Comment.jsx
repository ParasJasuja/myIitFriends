import React from "react";
import "../Styles/Comment.css";

function Comment(props) {
  return (
    <div className="Comment">
      <img className="circle-image-thumbnail" src={props.imgLink} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
