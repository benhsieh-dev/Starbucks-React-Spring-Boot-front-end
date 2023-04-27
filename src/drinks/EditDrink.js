import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditDrink() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [drink, setDrink] = useState({
    name: "",
    category: "",
    subcategory: "",
    price: "",
    imageUrl: "",
  });

  const { name, category, subcategory, price, imageUrl } = drink;

  const onInputChange = (e) => {
    setDrink({ ...drink, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDrink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/drink/${id}`, drink);
    navigate("/");
  };

  const loadDrink = async () => {
    const result = await axios.get(`http://localhost:8080/drink/${id}`);
    setDrink(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Menu Item</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Menu Item Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Category" className="form-label">
                Category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Menu Item Category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Subcategory" className="form-label">
                Subcategory
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Menu Item Subcategory"
                name="subcategory"
                value={subcategory}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Menu Item Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ImageUrl" className="form-label">
                Image Url
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Menu Item Image URL"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2 " to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
