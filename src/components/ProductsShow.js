import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsShow = (props) => {
  const util = require("util");

  console.log("Show props: " + util.inspect(props, false, null, true));

  let prod_id = parseInt(props.match.params.product_id);
  console.log("Show prod_id type: " + typeof(prod_id));
  console.log("Show prod_id value: " + prod_id);
  // let prod_id = parseInt(this.props.match.params.id);

  let productSelected = props.products.filter(
    product => product.id === prod_id
  )[0];

  console.log("Product selected NAME: " + productSelected.name);
  console.log("Product selected COLOR: " + productSelected.color);



  return (
    <div>
      <h1>Product Show By Id: </h1>
      <p>The ID is: {props.match.params.product_id}</p>

      <p>The name of the product: { productSelected.name }</p>
      <p>The ean of the product: { productSelected.ean }</p>
      <p>The color of the product: { productSelected.color }</p>
      <p>The price of the product: { productSelected.price }</p>
      <p>The quantity of the product: { productSelected.quantity }</p>
      <p>The available of the product: { productSelected.available }</p>


  

      <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Link to="/products">
              <button type="button" class="btn btn-success">
                Back
              </button>
            </Link>
          </Col>
        </Form.Group>

    </div>
  );
};

export default ProductsShow;
