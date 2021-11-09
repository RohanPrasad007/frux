import React from "react";
import coding from "../image/undraw_Coding_re_iv62.svg";
import "../css/Home.css";
import Blogs from "./Blogs";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src={coding} alt="hero" />
      </div>
      <Blogs />
    </div>
  );
}

export default Home;
