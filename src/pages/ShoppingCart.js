import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    return (
      <div data-testid="shopping-cart-empty-message">
        {
          cart
            ? cart.map((item) => (
              <div key={ item.id }>
                <img src={ item.thumbnail } alt={ item.title } />
                <h1 data-testid="shopping-cart-product-name">{item.title}</h1>
                <h2>{item.price}</h2>
                <h3 data-testid="shopping-cart-product-quantity">{item.quantity}</h3>
              </div>
            ))
            : 'Seu carrinho está vazio'
        }
      </div>
    );
  }
}
