import React from "react";

export default function AddDrink() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Menu Item</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Menu Item Name"
              name="name"
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
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <button type="submit" className="btn btn-outline-danger mx-2">Cancel</button>
        </div>
      </div>
    </div>
  );
}
