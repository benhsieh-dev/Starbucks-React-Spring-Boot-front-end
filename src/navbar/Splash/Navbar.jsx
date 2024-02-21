import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="splash-navbar-container">
          <div className="left-navigation-menu">
            <Link to="/">
              <img
                src={require("../../assets/images/starbucks-logo.png")}
                alt="Starbucks logo"
                width="60"
                height="60"
              ></img>
            </Link>
            <Link to="/menu">
              MENU
            </Link>
            <Link to="/rewards">
              REWARDS
            </Link>
            <Link to="/giftcards">
              GIFT CARDS
            </Link>
            <Link to="/adddrink">Add Menu Item</Link>
          </div>

          <div className="right-navigation-menu">

            <div className="left-submenu">
                <FontAwesomeIcon icon={faLocationDot} className="fa"/>
                <Link className="find-a-store" to="/storelocator">
                  Find a store
                </Link>
            </div>

            <div className="right-submenu">
              <div className="sign-in">
                <Link to="/signin">
                  Sign in
                </Link>
              </div>
              <div className="join-now">
                <Link to="/account/create">
                  Join now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
