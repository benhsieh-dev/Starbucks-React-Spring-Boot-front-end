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
            <br />
          </div>
          <div className="all-products-menu">
            <div className="left-side">
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Oleato™"
                  src="https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Oleato™</span>
              </div>

              <br />

              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Teas"
                  src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Hot Teas</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Frappuccino® Blended Beverages"
                  src="https://globalassets.starbucks.com/assets/7FD73D3C93AF43FFA84400A42EFC9F87.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Frappuccino® Blended Beverages</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Iced Teas"
                  src="https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg?impolicy=1by1_medium_630"
                ></img>
                <span>Iced Teas</span>
              </div>
            </div>

            <div className="right-side">
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Coffees"
                  src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Hot Coffees</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Teas"
                  src="https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Hot Drinks</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Cold Coffees"
                  src="https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Cold Coffees</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Cold Drinks"
                  src="https://globalassets.starbucks.com/assets/358b62402a844a3e9567d70a9790032f.jpg?impolicy=1by1_wide_topcrop_630"
                ></img>
                <span>Cold Drinks</span>
              </div>
            </div>
          </div>

          <div className="food-section">
            <h3>Food</h3>
            <hr />
          </div>

        </div>
      </div>
    </div>
  );
}
