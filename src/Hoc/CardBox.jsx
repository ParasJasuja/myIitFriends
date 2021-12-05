import React from "react";
import "../Styles/CardBox.css";

function CardBox(props) {
  return <div className="CardBox">{props.children}</div>;
}

export default CardBox;
