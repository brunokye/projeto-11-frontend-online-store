import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';

import './style/App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/product/:id" component={ ProductPage } />
      <Route path="/shoppingCart" component={ ShoppingCart } />
    </Switch>
  );
}

export default App;
