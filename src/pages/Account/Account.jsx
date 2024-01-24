import React from "react";
import "./Account.css";

export default function Account() {
  return (
    <div className="account-page-top">
      <div className="account-page-left">
        <img className="account-image"
          src={require("../../assets/images/137-88178.jpg")}
          alt="Starbucks Deals"
        ></img>
      </div>
      <div className="account-page-right">
        <p>New Year, New Yays</p>
        <br />
        <p>Jump-start your year with a week full of offers in the Starbucks app.*</p>
      </div>
    </div>
  );
}
