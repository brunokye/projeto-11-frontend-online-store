import React, { Component } from 'react';
import '../style/ShoppingCart.css';

export default class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ cart });
  };

  handleDelete = ({ target }) => {
    const { name } = target;
    const getItems = JSON.parse(localStorage.getItem('cart'));
    const filteredItems = getItems.filter((product) => product.title !== name);

    localStorage.setItem('cart', JSON.stringify(filteredItems));
    this.handleLocalStorage();
  };

  render() {
    const { cart } = this.state;

    return (
      <div data-testid="shopping-cart-empty-message">
        {
          cart.length > 0
            ? cart.map((item) => (
              <div key={ item.id } className="product-container">
                <button
                  data-testid="remove-product"
                  type="button"
                  name={ item.title }
                  onClick={ this.handleDelete }
                >
                  Remover
                </button>
                <img src={ item.thumbnail } alt={ item.title } />
                <p data-testid="shopping-cart-product-name">{item.title}</p>
                <p>{`R$ ${item.price}`}</p>
                <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
              </div>
            ))
            : 'Seu carrinho está vazio'
        }
      </div>
    );
  }
}
