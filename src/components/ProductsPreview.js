import React from "react";

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products")),
      product: {}
    };
  }

  commponentDidMount() {
    let prodId = this.props.match.params.id;
    this.state.product = this.getProductById(prodId);
  }

  getProductById(prodId) {
    let product = JSON.parse(localStorage.getItem("products")).filter(
      products => products.id === prodId
    );
    console.log("GetProductById is: " + product);
    return product;
  }

  render() {
    let prodId = this.props.match.params.id;
    console.log("Product Id is " + prodId);



    return (
      <div className="app-wrapper">
        <h1>PRODUCT PREVIEW</h1>
        <p>Product ID is: {this.props.match.params.id}</p>

        <p>PRODUCT PARAMETERS</p>

        <p></p>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Product details</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Price history</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Quantity history</a>
          </li>
        </ul>


      </div>
    );
  }
}

export default ProductsPreview;
