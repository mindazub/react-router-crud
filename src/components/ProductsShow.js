import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsShow = (props) => {
  const util = require("util");

  console.log("Show props: " + util.inspect(props, false, null, true));

  let prod_id = props.match.params.product_id;

  return (
    <div>
      <h1>Product Show By Id: </h1>
      <p>The ID is: {props.match.params.product_id}</p>

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
