import React from "react";
import "../css/Header.css";
import logo from "../image/logo.svg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="frux" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
