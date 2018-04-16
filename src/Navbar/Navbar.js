import React from "react";
import "./Navbar.css";
import Score from "../components/Game/Score.js";

const Navbar = () => (
    <nav className="nav-wrapper">
    <div>
      <a href="#" className="brand-logo">Memory Game</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down valign-wrapper">
        <Score />
      </ul>
    </div>
  </nav>
);

export default Navbar;
