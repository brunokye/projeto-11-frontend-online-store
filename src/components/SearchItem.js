import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/SearchItem.css';
import { Link } from 'react-router-dom';

export default class SearchItem extends Component {
  handleAddCart = () => {
    const { title, thumbnail, price, id } = this.props;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { id, title, thumbnail, price, quantity: 1 };
    const productExists = cart.find((item) => item.id === id);
    if (productExists) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  };

  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div
        data-testid="product"
        className="itemContainer"
      >
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          {title}
        </Link>
        <div className="descContainer">
          <img
            src={ thumbnail }
            alt={ title }
          />
          <h2>
            R$
            {price}
          </h2>
          <button
            type="button"
            onClick={ this.handleAddCart }
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

SearchItem.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
