import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <span className="creator">
          <a href="http://localhost:5173/" target="_blank">
            
            Dayyan Shaikh
            </a>
        </span>
        <ul className="social-network social-circle">
          <li>
            <a
              className="icoLinkedin"
              href="https://github.com/dayyan-shaikh"
              title="Linkedin"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="icoLinkedin"
              href="https://www.linkedin.com/in/dayyan-shaikh/"
              title="Linkedin"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="icoTwitter"
              href="https://twitter.com/DayyanShaikh_50"
              title="Twitter"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              className="icoFacebook"
              href="https://www.facebook.com/profile.php?id=100006539163202"
              title="Facebook"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          {/* <li>
            <a
              className="icoInstagram"
              href="https://www.instagram.com/dayyan__shk/"
              title="Instagram"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
