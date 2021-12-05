import React, { useState } from "react";
import "../Styles/Profile.css";
import CardBox from "../Hoc/CardBox";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import VideosGridContainer from "../Hoc/VideosGridContainer";
import EditProfileForm from "../components/EditProfileForm";

function Profile(props) {
  const [editingProfile, setEditingProfile] = useState(false);

  const toggleEditProfileHandler = () => {
    setEditingProfile((prvs) => {
      return !prvs;
    });
  };

  return (
    <div className="Profile">
      <section className="cover-photo-container">
        <img
          className="cover-photo"
          src="https://picsum.photos/1920/360"
          alt=""
        />
      </section>
      {editingProfile ? (
        <section className="edit-profile">
          <EditProfileForm closeEditProfile={toggleEditProfileHandler} />
        </section>
      ) : (
        <section className="profile-content">
          <div className="person-discription">
            <CardBox>
              {props.ownProfile ? (
                <button
                  className=" connect-btn bgColor profile-btn"
                  onClick={toggleEditProfileHandler}
                >
                  Edit Profile
                </button>
              ) : (
                <button className=" connect-btn bgColor profile-btn">
                  CONNECT
                </button>
              )}
              <img
                className="circle-profile-image"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                alt=""
              />
              <h1>Name Surname</h1>
              <h2>From IIT Delhi</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptates earum doloremque fugit, alias eum dicta odio
                inventore{" "}
              </p>
              <span>
                <FacebookIcon
                  className="social-icon"
                  style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}
                />
                <InstagramIcon
                  className="social-icon"
                  style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}
                />
                <TwitterIcon
                  className="social-icon"
                  style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}
                />
              </span>
            </CardBox>
          </div>
          <div className="profile-more-discription">
            <div className="more-discription-container">
              <h1>Certificates</h1>
              <p>Web Devlopment</p>
              <h1>Skills</h1>
              <p>UI/UX</p>
              <p>Web Design</p>
              <p>Digital Marketing</p>
              <h1>Experience</h1>
              <p>Senior UI/UX Designer</p>
              <h1>Awards</h1>
              <p>Codding Quiz</p>
            </div>
          </div>
          <div className="profile-more-content">
            <div className="profile-count-info">
              <span>
                <h1>336</h1>
                <p>CONNECTIONS</p>
              </span>
              <span>
                <h1>568</h1>
                <p>CONNECTED</p>
              </span>
              <span>
                <h1>50</h1>
                <p>VIDEOS</p>
              </span>
            </div>
          </div>
        </section>
      )}
      <VideosGridContainer>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
        <div className="box-container">
          <VideoThumbnailCard />
        </div>
      </VideosGridContainer>
    </div>
  );
}

export default Profile;
