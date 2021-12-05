import React, { useEffect, useState } from "react";
import GridRowContainer from "../Hoc/GridRowContainer";
import VideoThumbnailCard from "../components/VideoThumbnailCard";
import "../Styles/Home.css";
import ConnectButton from "../components/ConnectButton";
import { Link } from "react-router-dom";

function Home(props) {
  const [cards, setCards] = useState([]);
  const [personCards, setPersonCards] = useState([
    {
      name: "Name Surname",
      imgUrl: "https://picsum.photos/100/100",
      designation: "Co-Founder & CTO",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae, fuga quasi vitae magni totam atque natus odit",
      connected: false,
    },
    {
      name: "Name Surname",
      imgUrl: "https://picsum.photos/100/100",
      designation: "Co-Founder & CTO",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae, fuga quasi vitae magni totam atque natus odit",
      connected: false,
    },
    {
      name: "Name Surname",
      imgUrl: "https://picsum.photos/100/100",
      designation: "Co-Founder & CTO",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae, fuga quasi vitae magni totam atque natus odit",
      connected: true,
    },
  ]);

  const toggleConnect = (e, id) => {
    e.preventDefault();
    let usr = [...personCards];
    usr[id] = {
      ...usr[id],
      connected: !usr[id].connected,
    };
    setPersonCards(usr);
  };

  useEffect(() => {
    let usr = personCards.map((card, index) => {
      return (
        <div key={index} className="box-container">
          <a href="/">
            <div className="profile-card">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                alt=""
              />
              <h3>Name Surname</h3>
              <p className="profile-card-subheading">{card.designation}</p>
              <p>{card.discription}</p>
              <div className="connect-btn-container">
                <ConnectButton
                  connected={card}
                  toggleConnect={toggleConnect}
                  id={index}
                />
              </div>
            </div>
          </a>
        </div>
      );
    });
    setCards(usr);
  }, [personCards]);

  return (
    <div className="Home">
      <section
        style={{
          backgroundImage: "url(/front.png)",
        }}
        className="home-header"
      >
        {/* <img src="/front.png" alt="" /> */}
        <div className="home-header-content">
          <h1 className="large-heading">Learn from top IIT student</h1>
          {props.logedIn && <button onClick={props.logIn}>SIGNUP</button>}
        </div>
      </section>
      <section className="home-available-content-info">
        <div className="home-two-card-grid-container">
          <div className="home-feature-card">
            <img src="https://picsum.photos/72/72" alt="" />
            <span>Helping in your Project</span>
          </div>
          <div className="home-feature-card">
            <img src="https://picsum.photos/72/72" alt="" />
            <span>Learn More Skills</span>
          </div>
        </div>
        <div className="home-content-container">
          <div className="home-content-redirect-card">
            <h3>Notes</h3>
          </div>
          <div className="home-content-redirect-card">
            <h3>Resources</h3>
          </div>
          <div className="home-content-redirect-card">
            <h3>Doubt Session</h3>
          </div>
          <div className="home-content-discription">
            <h2>Learn through Videos session, QnA Video for free.</h2>
            <p>Notes Doubt Session, PDF, Chat, Vlog option are paid</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      <section className="featured-videos">
        <h1 className="heading">Videos</h1>
        <GridRowContainer>
          <div className="box-container">
            <VideoThumbnailCard
              videoThumbnail="https://picsum.photos/300/150"
              profileThumbnail="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
            />
          </div>
          <div className="box-container">
            <VideoThumbnailCard
              videoThumbnail="https://picsum.photos/300/150"
              profileThumbnail="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
            />
          </div>
          <div className="box-container">
            <VideoThumbnailCard
              videoThumbnail="https://picsum.photos/300/150"
              profileThumbnail="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
            />
          </div>
        </GridRowContainer>
        <Link to="/videos" className="btn bgColor btn-link">
          View More
        </Link>
      </section>
      <section className="start-learning-section">
        <div className="start-learning-container">
          <div className="start-learning-image-container">
            <img
              className="start-learning-image"
              src="https://picsum.photos/480/360"
              alt=""
            />
          </div>
          <div className="start-learning-content-container">
            <h1 className="large-heading">Develop Your Skill with IITians</h1>
            <p>Learn through live session, doubt session QNA Video and more</p>
            <Link to="/Videos">
              <button className="btn bgColor">Start Learning</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="featured-instructor">
        <div className="featured-instructor-card-container">
          <h1 className="heading">Connect with your Educator</h1>
          <GridRowContainer>{cards}</GridRowContainer>
        </div>
      </section>

      <section className="download-app-section">
        <div className="download-app-container">
          <div className="download-app-image-container">
            <div className="download-app-content">
              <h1 className="download-app-heading">Download the App</h1>
              <p className="download-app-discription">
                Learn anytime, anywhere and also chat option available in the
                app.
              </p>
              <a href="/" className="download-app-link" alt="">
                <img src="/googlePlayStore.png" alt="" />
                <span>
                  <p>GET IT ON</p>
                  <h2>Google Play</h2>
                </span>
              </a>
            </div>
            <img className="download-app-image" src="/downloadApp.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
