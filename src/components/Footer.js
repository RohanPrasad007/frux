import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../css/Footer.css";

function Footer() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="top">
          <div
            onClick={() => {
              backToTop();
            }}
          >
            <KeyboardArrowUpIcon fontSize="large" />
            <p>Top</p>
          </div>
        </div>
        <div className="contact">
          <a href="mailto:frux.site@gmail.com">
            <EmailIcon />
          </a>
          <a
            href="https://www.instagram.com/frux_site/"
            target="_blank"
            rel="noreferrer"
            className="toggle-btn"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzJ658Q7698l4xzk7xuq3-w/featured"
            target="_blank"
            rel="noreferrer"
            className="toggle-btn"
          >
            <YouTubeIcon />
          </a>
        </div>
        <div>copyright &copy; 2021</div>
      </div>
    </footer>
  );
}

export default Footer;
