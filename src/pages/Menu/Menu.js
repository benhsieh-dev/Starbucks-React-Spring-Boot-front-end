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
          <Link to="/adddrink">Favorite Products</Link>
        </div>
      </nav>
      <div className="menu-container">
        <div className="sidebar">
          <ul>
            <h3>Drinks</h3>
            <li>Oleato™</li>
            <Link to="/menu/drinks/hot-coffees">Hot Coffees</Link>
            <li>Hot Teas</li>
            <li>Hot Drinks</li>
            <li>Frappuccino® Blended Beverages</li>
            <li>Cold Coffees</li>
            <li>Iced Teas</li>
            <li>Cold Drinks</li>
          </ul>
        </div>
          <AllProducts />
        <div>
        </div>
      </div>
    </div>
  );
}
