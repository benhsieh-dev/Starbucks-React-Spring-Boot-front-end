import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";


export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/menu/drinks/hot-coffees">
            All Products
          </Link>
          <Link className="navbar-brand" to="/rewards">
            Featured
          </Link>
          <Link className="navbar-brand" to="/giftcards">
            Previous Orders
          </Link>
          <Link to="/adddrink">Favorite Products</Link>
        </div>
      </nav>
      <div className="sidebar">
        <ul>
          <h3>Drinks</h3>
          <li>Oleato™</li>
          <li>Hot Coffees</li>
          <li>Hot Teas</li>
          <li>Hot Drinks</li>
          <li>Frappuccino® Blended Beverages</li>
          <li>Cold Coffees</li>
          <li>Iced Teas</li>
          <li>Cold Drinks</li>
        </ul>
      </div>
    </div>
  );
}
