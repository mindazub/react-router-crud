import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductsCreate from './components/ProductsCreate';
import ProductsPreview from './components/ProductsPreview';
import ProductsEdit from './components/ProductsEdit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

let products = [{
  id: 1,
  name: 'iPad',
  ean: 5,
  type: 'tablet',
  weight: 450,
  color: 'pink',
  quantity: 56,
  active: 1,
  price: 200
},
{
  id: 2,
  name: 'iPhone',
  ean: 3,
  type: 'phone',
  weight: 180,
  color: 'rose',
  quantity: 5,
  active: 1,
  price: 650
},
{
  id: 3,
  name: 'macbook',
  ean: 3,
  type: 'laptop',
  weight: 2000,
  color: 'pink',
  quantity: 2,
  active: 1,
  price: 650
}
];

let selectedProduct = {};

// let products = [];
localStorage.setItem('products', JSON.stringify(products));
localStorage.setItem('selectedProduct', selectedProduct);




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products")),
      selectedProduct: localStorage.getItem("selectedProduct"),

    };

    console.log('App constructor - products: ' + products);
    console.log('App constructor - productSelected: ' + selectedProduct);
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">

            <Switch>
              <Route exact path="/" component={Home}  />
              <Route exact path="/about" component={About} />
              <Route exact path="/products/create/" component={ProductsCreate} />} />
              <Route exact path="/products" render={(props) => <Products {...props} products={products} selectedProduct={selectedProduct}/>} />
              <Route exact path="/products/:id" render={(props) => <ProductsPreview {...props} products={products} selectedProduct={selectedProduct}/>} />
              <Route exact path="/products/:id/edit/" render={(props) => <ProductsEdit {...props} products={products} selectedProduct={selectedProduct}/>} />
              <Route render={
                () => <h3>Not found</h3>
              } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}


export default App;