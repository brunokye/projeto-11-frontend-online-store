import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/SearchItem.css';

export default class SearchItem extends Component {
  render() {
    const { title, thumbnail, price } = this.props;

    return (
      <div data-testid="product" className="itemContainer">
        <div>{title}</div>
        <div className="descContainer">
          <img
            src={ thumbnail }
            alt={ title }
          />
          <h2>{price}</h2>
          <button
            type="button"
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
}.isRequired;
