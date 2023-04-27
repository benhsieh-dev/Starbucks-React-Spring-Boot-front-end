import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Menu() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    loadDrinks();
  }, []);

  const loadDrinks = async () => {
    const result = await axios.get("http://localhost:8080/drinks");
    setDrinks(result.data);
  };

  return (
    <div>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Subcategory</th>
              <th scope="col">Price</th>
              <th scope="col">Image URL</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {drinks.map((drink, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{drink.name}</td>
                <td>{drink.category}</td>
                <td>{drink.subcategory}</td>
                <td>{drink.price.toFixed(2)}</td>
                <td>{drink.imageUrl}</td>
                <td>
                  <button className="btn btn-primary mx-2">View</button>
                  <Link className="btn btn-outline-primary mx-2" to={`/editdrink/${drink.id}`}>Edit</Link>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
