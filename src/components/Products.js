// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products")),
      productSelected: ''
    };
  }

  render() {
    return (
      <div class="app-wrapper">
        <Link to="/products/create">
          <button type="button" class="btn btn-success">
            Add Product
          </button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">EAN</th>
              <th scope="col">Type</th>
              <th scope="col">Color</th>              
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Active</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{product.name}</td>
                <td>{product.ean}</td> 
                <td>{product.type}</td>
                <td>{product.color}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.active}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-primary"
                    to={`/products/${index + 1}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-sm btn-info"
                    to={`/products/${index + 1}/edit`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-sm btn-danger"
                    to={`/products/${index + 1}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
