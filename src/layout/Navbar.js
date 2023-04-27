import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img
            src={require("../assets/images/starbucks-logo.png")}
            alt="Starbucks logo"
            width="60"
            height="60"
          ></img>
        </Link>
        <div className="container-fluid">
          <div className="left-navigation-menu">
            <a className="navbar-brand" href="www.google.com">
              MENU
            </a>
            <a className="navbar-brand" href="www.amazon.com">
              REWARDS
            </a>
            <a className="navbar-brand" href="www.youtube.com">
              GIFT CARDS
            </a>
            <Link to="/adddrink">Add Menu Item</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
