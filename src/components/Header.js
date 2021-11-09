import React from "react";
import "../css/Header.css";
import logo from "../image/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="frux" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
