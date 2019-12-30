import React from 'react'
//import axios from 'axios'

class ProductsPreview extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
        products: JSON.parse(localStorage.getItem('products'))
    }
};

  commponentDidMount(products) {
    
  }

  render() {
  return (
    <div>
      <h1>PRODUCT PREVIEW</h1>
        <p>Product ID is: {this.props.match.params.id}</p>
        
    </div>
  );
  }
}

export default ProductsPreview;