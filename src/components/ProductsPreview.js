import React from 'react'
//import axios from 'axios'

class ProductsPreview extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
        products: JSON.parse(localStorage.getItem('products'))
    }
};

products = JSON.parse(localStorage.getItem('products'));


// console.log(products);
  // const {
  //   params: { productId }
  // } = match;

  //let product = products.find(product => product.id === productId);

  commponentDidMount(products, productId) {
    let product = products.filter(product => product.id === productId);
    if(product){
      console.log(product);
      return product;
    } else {
      return "no product";
    }

  }

  render() {
  return (
    <div>
      <h1>PRODUCT NAME</h1>
    </div>
  );
  }
}

export default ProductsPreview;