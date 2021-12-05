import React from "react";
import "../Styles/Resources.css";
import Resource from "../components/Resource";

function Resources() {
  return (
    <div className="Resources">
      <div className="image-resource-container"></div>

      <h1 className="heading">Books</h1>
      <div className="resources-container">
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
        <Resource download link="/" heading="xyz" discription="dfiadofn" />
      </div>
      <h1 className="heading"> Notes</h1>
      <div className="resources-container">
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
        <Resource link="/" heading="xyz" discription="dfiadofn" />
      </div>
    </div>
  );
}

export default Resources;
