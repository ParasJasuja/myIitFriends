import React from "react";
import "../Styles/ProfileBar.css";

function ProfileBar(props) {
  return (
    <div className="ProfileBar">
      <div className="Profile-bar">
        <span className="profile-image-container">
          <img
            className="profile-image"
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt=""
          />
        </span>
        <span className="profile-dis">
          <span>
            <h1>Name Surname</h1>
            <h2>IIT Kanpur</h2>
          </span>
          <div className="view-more">
            {props.ownProfile && (
              <button className="connection-count">1K Connections</button>
            )}
            {props.conProfile && (
              <button className="connection-count">Leave</button>
            )}
            <a href="/" className="view-profile">
              Your Profile
            </a>
            {/* These span is just for making space even */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default ProfileBar;
