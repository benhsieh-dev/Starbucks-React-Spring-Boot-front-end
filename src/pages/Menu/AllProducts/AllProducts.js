import React from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";

export default function AllProducts() {
  return (
    <div>
      <div className="all-products-container">
        <div className="sidebar">
          <h3>Drinks</h3>
          <Link className="sidebar-link">Oleato™</Link>
          <Link className="sidebar-link" to="/menu/drinks/hot-coffees">
            Hot Coffees
          </Link>
          <Link className="sidebar-link">Hot Teas</Link>
          <Link className="sidebar-link">Hot Drinks</Link>
          <Link className="sidebar-link">Frappuccino® Blended Beverages</Link>
          <Link className="sidebar-link">Cold Coffees</Link>
          <Link className="sidebar-link">Iced Teas</Link>
          <Link className="sidebar-link">Cold Drinks</Link>
        </div>

        <div className="display-panel">
          <div className="display-panel-intro">
            <h2>Menu</h2>
            <br />
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

              <br />

              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Teas"
                  src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span className="right">Hot Teas</span>
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

              <br />

              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Teas"
                  src="https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span className="right">Hot Drinks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
