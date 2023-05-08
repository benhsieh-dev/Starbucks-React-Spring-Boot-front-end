import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import AllProducts from "./AllProducts/AllProducts";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/menu/">
            All Products
          </Link>
          <Link className="navbar-brand" to="/rewards">
            Featured
          </Link>
          <Link className="navbar-brand" to="/giftcards">
            Previous Orders
          </Link>
          <Link className="navbar-brand" to="/adddrink">
            Favorite Products
          </Link>
        </div>
      </nav>
      <div className="menu-container">
        <AllProducts />
      </div>
    </div>
  );
}
