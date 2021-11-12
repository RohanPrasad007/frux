import React from "react";
import coding from "../image/undraw_Coding_re_iv62.svg";
import "../css/Home.css";
import Blogs from "./Blogs";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Frux</title>
        <meta
          name="description"
          content="Blog post about coding, technology, pc parts and more..."
        />
      </Helmet>
      <div className="home-container">
        <img src={coding} alt="hero" />
      </div>
      <Blogs />
    </div>
  );
}

export default Home;
