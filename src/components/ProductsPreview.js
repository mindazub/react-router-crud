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
      <div>
        <h1>PRODUCT PREVIEW</h1>
        <p>Product ID is: {this.props.match.params.id}</p>

        <p>PRODUCT PARAMETERS</p>

        <p></p>

        <p>
          In preview section we need a tab system which will have 3 tabs:
          Product details, Price History, Quantity history.
        </p>
        <p></p>
      </div>
    );
  }
}

export default ProductsPreview;
