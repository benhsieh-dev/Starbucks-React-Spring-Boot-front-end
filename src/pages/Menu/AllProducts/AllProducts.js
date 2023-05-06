import React from "react";

export default function AllProducts() {
  return (
    <div>
      <h2>Menu</h2>
      <h3>Drinks</h3>
      <hr />
      <div className="image-container">
        <img
          className="menu-item left"
          alt="Oleato™"
          src="https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_wide_topcrop_630"
        ></img>
        <span className="right">Oleato™</span>
      </div>
    </div>
  );
}
