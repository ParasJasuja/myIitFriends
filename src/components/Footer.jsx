import React from "react";
import "../Styles/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="footer-head">
        <span>
          My
          <h1>IIT Friends</h1>
        </span>
        <div className="footer-socials">
          <FacebookIcon className="social-icon" style={{ fontSize: "3rem" }} />
          <InstagramIcon className="social-icon" style={{ fontSize: "3rem" }} />
          <TwitterIcon className="social-icon" style={{ fontSize: "3rem" }} />
        </div>
      </div>
      <div className="contact-info">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
        </ul>
        <form>
          <input type="email" placeholder="Email" />
          <button className="">OK</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
