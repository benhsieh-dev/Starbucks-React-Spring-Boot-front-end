import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDrink() {
  const [drink, setDrink] = useState({
    name: "",
    category: "",
    subcategory: "",
    price: "",
    imageUrl: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadDrink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadDrink = async () => {
    const result = await axios.get(`http://localhost:8080/drink/${id}`);
    setDrink(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Menu Item Details</h2>
          <div className="card">
            <div className="card-header">
              Details of drink id: {drink.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {drink.name}
                </li>
                <li className="list-group-item">
                  <b>Category:</b>
                  {drink.category}
                </li>
                <li className="list-group-item">
                  <b>Subcategory:</b>
                  {drink.subcategory}
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {drink.price}
                </li>
                <li className="list-group-item">
                  <b>Image Url:</b>
                  {drink.imageUrl}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
