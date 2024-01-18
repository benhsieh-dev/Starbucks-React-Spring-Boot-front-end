import React from "react";
import "./AccountNavbar.css"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function AccountNavbar() {
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
            <FontAwesomeIcon icon={faLocationDot} />
            <Link className="navbar-brand" to="/storelocator">
              Find a store
            </Link>
            <div className="navbar-brand dropdown">
              <FontAwesomeIcon icon={faCircleUser} />
              <button class="button">Account</button>
              <div className="content">
                <a href="www.google.com">Card Management</a>
                <a href="www.google.com">My Rewards</a>
                <a href="www.google.com">History</a>
                <a href="www.google.com">Personal Info</a>
                <a href="www.google.com">Payment Method</a>
                <a href="www.google.com">Privacy and data</a>
                <a href="www.google.com">Settings</a>
                <hr />
                <a href="www.google.com">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
