import React from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";

export default function AllProducts() {
  return (
    <div>
      <div className="all-products-container">

        <div className="sidebar">
          <h3>Drinks</h3>
          <Link>Oleato™</Link>
          <Link to="/menu/drinks/hot-coffees">Hot Coffees</Link>
          <Link>Hot Teas</Link>
          <Link>Hot Drinks</Link>
          <Link>Frappuccino® Blended Beverages</Link>
          <Link>Cold Coffees</Link>
          <Link>Iced Teas</Link>
          <Link>Cold Drinks</Link>
        </div>

        <div className="display-panel">
          <div className="display-panel-intro">
            <h2>Menu</h2>
            <h3>Drinks</h3>
            <hr />
          </div>
          <div className="all-products-menu">
            <div className="left-side">
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Oleato™"
                  src="https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span className="right">Oleato™</span>
              </div>
            </div>
            <div className="right-side">
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Coffees"
                  src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span className="right">Hot Coffees</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
