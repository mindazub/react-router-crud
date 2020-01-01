import React from "react";
import '../App.css';

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products")),
    };

    

  }


  commponentDidMount() {
    let productFound = this.state.products.find(product => product.id === this.props.match.params.id);
    console.log('Product is: ' + productFound.name);

  }

  // getProductById(prodId) {
  //   let product = JSON.parse(localStorage.getItem("products")).filter(
  //     products => products.id === prodId
  //   );
  //   console.log("GetProductById is: " + product);
  //   return product;
  // }

  render() {
    let prodId = this.props.match.params.id;
    console.log("Product Id is " + prodId);
    
    return (
      <div className="app-wrapper">
        <h1>PRODUCT PREVIEW</h1>
        <p>Product ID is: {this.props.match.params.id}</p>

        <p>PRODUCT PARAMETERS</p>



        <ul className="nav nav-tabs my-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Product details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.showPriceHistory} href="#">Price history</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.showPriceHistory} href="#">Quantity history</a>
          </li>
        </ul>




      </div>
    );
  }
}

export default ProductsPreview;
