import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/SearchItem.css';
import { Link } from 'react-router-dom';

export default class SearchItem extends Component {
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
          <button type="button">Adicionar ao carrinho</button>
        </div>
      </div>
    );
  }
}

SearchItem.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
