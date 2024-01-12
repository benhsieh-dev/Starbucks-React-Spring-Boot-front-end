import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Home = (props) => {
  const {userName, isLoggedIn} = useContext(AppContext); 
  return (
    <div>
      <h2>Welcome {userName}</h2>
      <hr></hr>

      <div className="row-1 container">
        <div className="row-1-left">
          <h1>Cups of appreciation</h1>
          <p>
            This Administrative Professional's Day, express your thanks with a
            well-deserved Starbucks Card.
          </p>
          <Link to="/giftcards">Send an eGift</Link>
        </div>
        <div className="row-1-right">
          <img
            alt="Gift card that reads, “Great Work Deserves Coffee.”"
            className="block"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83681.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home; 