import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HotCoffees() {
  const [drinks, setDrinks] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadDrinks();
  }, []);

  const loadDrinks = async () => {
    const result = await axios.get("http://localhost:8080/drinks");
    setDrinks(result.data);
  };

  const deleteDrink = async (id) => {
    await axios.delete(`http://localhost:8080/drink/${id}`);
    loadDrinks();
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
                <td><img className="menu-item" alt="menu item" src={drink.imageUrl} /></td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewdrink/${drink.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editdrink/${drink.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteDrink(drink.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
