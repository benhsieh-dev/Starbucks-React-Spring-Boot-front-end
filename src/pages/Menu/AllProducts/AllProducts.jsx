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
                  src="/assets/images/drinks/Oleato™/OleatoGingerbreadLatte.avif"
                ></img>
                <span>Oleato™</span>
              </div>

              <br />

              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Teas"
                  src="/assets/images/drinks/Hot Teas/hot_teas.avif"
                ></img>
                <span>Hot Teas</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Frappuccino® Blended Beverages"
                  src="/assets/images/drinks/Frappuccino® Blended Beverages/Frappuccino®.avif"
                ></img>
                <span>Frappuccino® Blended Beverages</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Iced Teas"
                  src="/assets/images/drinks/Iced Teas/SBX20190531_IcedBlackTea.avif"
                ></img>
                <span>Iced Teas</span>
              </div>
            </div>

            <div className="right-side">
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Coffees"
                  src="/assets/images/drinks/Hot Coffees/caffè americano.png"
                ></img>
                <span>Hot Coffees</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Hot Drinks"
                  src="/assets/images/drinks/Hot Drinks/hot_drinks.avif"
                ></img>
                <span>Hot Drinks</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Cold Coffees"
                  src="/assets/images/drinks/Cold Coffees/PistachioCreamColdBrew.avif"
                ></img>
                <span>Cold Coffees</span>
              </div>

              <br />
              <div className="image-container">
                <img
                  className="menu-item"
                  alt="Cold Drinks"
                  src="/assets/images/drinks/Cold Drinks/SBX20221216_FrozenPineapplePassionfruitRefresherLemonade.avif"
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
