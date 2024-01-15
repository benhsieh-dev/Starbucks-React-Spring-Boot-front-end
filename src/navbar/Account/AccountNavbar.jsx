import React from "react";
import "./AccountNavbar.css"; 
import { Link } from "react-router-dom";

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
            <Link className="navbar-brand" to="/storelocator">
              Find a store
            </Link>
            <div className="navbar-brand">Account</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
