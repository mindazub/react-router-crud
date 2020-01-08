import React from "react";
import "../App.css";

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      products: JSON.parse(localStorage.getItem("products"))

    };
  }

    componentDidMount() {

    let prod_id = parseInt(this.props.match.params.id);

    let productSelected = this.state.products.find(
      product => product.id === prod_id
    );

    this.setState({productSelected: productSelected});

    console.log("Did mount Product Selected: -> " + productSelected.name);
}

  render() {
    let prod_id = parseInt(this.props.match.params.id);

    let productSelected = this.props.products.filter(
      product => product.id = prod_id
    )[0];
    
    // this.setState({productSelected: productSelected});

    console.log("Product Selected in render: -> " + productSelected.name);

    // console.log("Preview Propsai: " + this.props);
    console.log("Preview Type of selected id: " + typeof(this.props.match.params.id));
    console.log("Preview Product selected: " + productSelected.name);  
    
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
              <table className="table">
                <thead>
                  <tr>
                    <th>{productSelected.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{productSelected.ean}</td>
                  </tr>
                  <tr>
                    <td>{productSelected.type}</td>
                  </tr>
                  <tr>
                    <td>{productSelected.color}</td>
                  </tr>
                  <tr>
                    <td>{productSelected.quantity}</td>
                  </tr>
                  <tr>
                    <td>{productSelected.price}</td>
                  </tr>
                  <tr>
                    <td>{productSelected.active}</td>
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
