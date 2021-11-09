import React from "react";
import "../css/Blog.css";
import { Link } from "react-router-dom";
import image from "../image/freelacing.svg";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-container">
        <h1>How a 16 years old become a freelancer?</h1>
        <img src={image} alt="hero" />
        <p>
          Freelancing is one of the most popular way to make money online but it
          is not a get rich quick scheme. It requires patience, consistency and
          hard work. Most people think you just need to sit at home and work and
          money will come to you. That's not the case. In this post, I am going
          to tell you how I got started and what are the things that you need to
          keep in mind.
        </p>
        <div className="post-entry">
          <Link to="/blog/freelacing">READ MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
