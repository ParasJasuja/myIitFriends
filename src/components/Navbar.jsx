import React, { useState } from 'react';
import "../Styles/Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SettingsIcon from '@material-ui/icons/Settings';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Navbar(props) {
    return (
        <div className="Navbar">
            <div className="navbar">
              <nav className="navlinks">
                <span>
                  <a href="/" className="main-logo">
                    <span>My</span>
                    <span>IIT Friends</span>
                  </a>
                  {
                    props.Category
                    &&
                    <div className="category">
                      <span className="dropdown-btn">Category ˅</span>
                      <ul className="dropdown">
                        <li>All</li>
                        <li>Live Stream</li>
                        <li>Videos</li>
                        <li>Resources</li>
                      </ul>
                    </div>
                  }
                </span>
                <span>
                    {
                      props.Searchbar
                      &&
                      <form className="searchbar">
                      <div className="searchbar-box">
                        <input type="search" name="search" id="search" placeholder="Search" />
                        <button type="search" className="search-btn">
                            <SearchIcon fontSize="small" />
                        </button>
                      </div>
                      </form>
                    }
                    {
                      props.Notification
                      &&
                      props.Logedin
                      &&
                      <a href="/" className="icon">
                        <NotificationsNoneIcon Filled />
                      </a>
                    }
                    {
                      props.AddVideo
                      &&
                      props.Logedin
                      &&
                      <a className="icon" href="/">
                        <VideoCallIcon />
                      </a>
                    }
                    {
                      props.Logedin
                      ?
                      <div className="more-options">
                        <label htmlFor="profile-dropdown-toggle" className="icon">
                          <img
                            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                            alt=""
                            className="profilelogo"
                          />
                        </label>
                        <input id="profile-dropdown-toggle" type="button" />
                          <ul className="profile-dropdown">
                            <li>
                              <img 
                              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                              alt=""
                              className="profile-thumbnail"
                              />
                              <span>
                                <h4 className="profile-name">Name Surname</h4>
                                <a href="/"><p className="profile-view">View Profile </p></a>
                              </span>
                            </li>
                            <li><a href="/"><CheckCircleIcon /> My Connections</a></li>
                            <li><a href="/"><HistoryIcon /> History</a></li>
                            <li><a href="/"><SettingsIcon /> Settings</a></li>
                            <li><a href="/"><ExitToAppIcon /> Logout</a></li>
                          </ul>
                      </div>:
                      <button className="login-btn">Login</button>
                    }
                </span>
              </nav>
            </div>
        </div>
    )
}

export default Navbar
