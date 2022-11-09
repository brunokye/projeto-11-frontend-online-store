import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import SearchItem from '../components/SearchItem';

export default class Home extends Component {
  state = {
    listItems: [],
    item: '',
    foundItems: true,
  };

  handleValue = (event) => {
    const { value } = event.target;
    this.setState({ item: value });
  };

  handleSearchClick = async () => {
    const { item } = this.state;
    const data = await getProductsFromCategoryAndQuery(null, item);

    if (data.results.length === 0) {
      this.setState({
        foundItems: false,
        item: '',
        listItems: [],
      });
    } else {
      this.setState({
        foundItems: true,
        listItems: data.results,
        item: '',
      });
    }
  };

  handleCategoryClick = async (event) => {
    const { value } = event.target;
    const data = await getProductsFromCategoryAndQuery(value, null);
    this.setState({
      listItems: data.results,
    });
  };

  render() {
    const { listItems, item, foundItems } = this.state;

    return (
      <div className="appContainer">
        <Categories onClick={ this.handleCategoryClick } />
        <div>
          <input
            data-testid="query-input"
            type="text"
            value={ item }
            onChange={ this.handleValue }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleSearchClick }
          >
            Pequisar
          </button>
          {
            listItems.length !== 0 ? null : (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          }

          {
            foundItems
              ? listItems.map(({ id, title }) => (
                <SearchItem key={ id } title={ title } />
              ))
              : <p>Nenhum produto foi encontrado</p>
          }
        </div>

        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}
