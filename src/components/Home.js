import React from "react";
import coding from "../image/undraw_Coding_re_iv62.svg";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src={coding} alt="hero" />
      </div>
    </div>
  );
}

export default Home;
