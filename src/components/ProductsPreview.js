import React from "react";
import "../App.css";

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
  }

  commponentDidMount() {
    // let productFound = this.state.products.filter(product => product.id === this.props.match.params.id)[0];
    // console.log('Product is: ' + productFound.name);
    let productFound = this.state.products.filter(
      product => (product.id = this.props.match.params.id)
    )[0];

    console.log("Masyvas? - " + this.state.products);
  }

  render() {
    let productFound = this.state.products.filter(
      product => (product.id = this.props.match.params.id)
    )[0];

    return (
      <div className="app-wrapper">
        <h1>PRODUCT PREVIEW</h1>

        <p>PRODUCT PARAMETERS</p>

        <ul className="nav nav-tabs my-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Product details
            </a>
            <p>
              <table class="table">
                <thead>
                  <tr>
                    <th>{productFound.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{productFound.ean}</td>
                  </tr>
                  <tr>
                    <td>{productFound.type}</td>
                  </tr>
                  <tr>
                    <td>{productFound.color}</td>
                  </tr>
                  <tr>
                    <td>{productFound.quantity}</td>
                  </tr>
                  <tr>
                    <td>{productFound.price}</td>
                  </tr>
                  <tr>
                    <td>{productFound.active}</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.showPriceHistory} href="#">
              Price history
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.showPriceHistory} href="#">
              Quantity history
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductsPreview;
