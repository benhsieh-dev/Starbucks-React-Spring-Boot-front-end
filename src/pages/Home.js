import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
            </tr>
          </thead>
          <tbody>
            {drinks.map((drink, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index++}
                </th>
                <td>{drink.name}</td>
                <td>{drink.category}</td>
                <td>{drink.subcategory}</td>
                <td>{drink.price}</td>
                <td>{drink.imageUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
