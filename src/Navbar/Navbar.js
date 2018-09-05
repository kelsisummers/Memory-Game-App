import React from "react";
import "./Navbar.css";
import logo from "../img/GameLogo-white.png";
// import Game from "../components/Game"

const Navbar = (props) => (
    <div className='nav-wrapper'>
      <a className="brand-logo">
        <img className="logo" alt="logo" src={logo} />
      </a>
      {/* <ul id="nav-mobile" className="right hide-on-med-and-down valign-wrapper"> */}
        <span className='score'>Score: {props.score} </span>
      {/* </ul> */}
    </div>
);

export default Navbar;
