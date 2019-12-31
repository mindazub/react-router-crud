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

const products = [{
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


// let products = [];
localStorage.setItem('products', JSON.stringify(products));


class App extends React.Component {


  render() {
    return (
      <div>
        <Router>
          <div className="App">

            <Switch>
              <Route exact path="/" component={Home}  />
              <Route exact path="/about" component={About} />
              <Route exact  path="/products/create/" component={ProductsCreate} />} />
              <Route exact  path="/products" component={Products} />
              <Route exact  path="/products/:id" render={(props) => <ProductsPreview {...props} />} />
              <Route exact  path="/products/:id/edit/" render={(props) => <ProductsEdit {...props}/>} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}


export default App;