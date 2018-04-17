import React from "react";
import "./Navbar.css";
import Game from "../components/Game"

const Navbar = (props) => (
    <nav className="nav-wrapper">
    <div>
      <a className="brand-logo">Memory Game</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down valign-wrapper">
        <li>Score: {props.score} </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
