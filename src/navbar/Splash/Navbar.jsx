import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img
              src={require("../../assets/images/starbucks-logo.png")}
              alt="Starbucks logo"
              width="60"
              height="60"
            ></img>
          </Link>
          <div className="left-navigation-menu">
            <Link className="navbar-brand" to="/menu">
              MENU
            </Link>
            <Link className="navbar-brand" to="/rewards">
              REWARDS
            </Link>
            <Link className="navbar-brand" to="/giftcards">
              GIFT CARDS
            </Link>
            <Link to="/adddrink">Add Menu Item</Link>
          </div>

          <div className="right-navigation-menu">
            <FontAwesomeIcon className="fa" icon={faLocationDot} />
            <Link className="navbar-brand" to="/storelocator">
              Find a store
            </Link>
            <Link className="navbar-brand" to="/signin">
              Sign in
            </Link>
            <FontAwesomeIcon icon={faCircleUser} />
            <Link className="navbar-brand" to="/account/create">
              Join now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
