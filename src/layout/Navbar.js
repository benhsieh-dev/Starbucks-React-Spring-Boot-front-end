import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={require("../assets/images/starbucks-logo.png")}
          alt="Starbucks logo"
          width="60"
          height="60"
        ></img>
        <div className="container-fluid">
          <div className="left-navigation-menu">
            <a className="navbar-brand" href="#">
              MENU
            </a>
            <a className="navbar-brand" href="#">
              REWARDS
            </a>
            <a className="navbar-brand" href="#">
              GIFT CARDS
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">test</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
