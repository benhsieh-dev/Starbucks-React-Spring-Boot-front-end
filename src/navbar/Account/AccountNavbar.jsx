import React from "react";
import "./AccountNavbar.css"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function AccountNavbar() {
  return (
    <div>
      <nav>
        <div className="acct-navbar-container">

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
              <Link to="/adddrink">ADD MENU ITEM</Link>
            </div>

          <div className="right-navigation-menu">
            <div className="icon">
              <FontAwesomeIcon className="fa" icon={faLocationDot} />
              <Link to="/storelocator">
                Find a store
              </Link>
            </div>
            <div className="dropdown">
              <div className="navbar-account icon">
                <FontAwesomeIcon className="fa" icon={faCircleUser} />
                <button class="button">Account</button>
              </div>
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
      <hr />
    </div>
  );
}
