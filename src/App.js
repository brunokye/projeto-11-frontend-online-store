import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from './services/api';
import Categories from './components/Categories';

import './style/App.css';
import SearchItem from './components/SearchItem';

class App extends Component {
  state = {
    listItems: [],
    item: '',
    foundItems: false,
  };

  handleValue = (event) => {
    const { value } = event.target;
    this.setState({ item: value });
  };

  handleClick = async () => {
    const { item } = this.state;
    const data = await getProductsFromCategoryAndQuery(null, item);

    if (data.results.length === 0) {
      this.setState({
        foundItems: false,
        item: '',
      });
    } else {
      this.setState({
        foundItems: true,
        listItems: data.results,
        item: '',
      });
    }
  };

  render() {
    const { listItems, item, foundItems } = this.state;

    return (
      <div className="appContainer">
        <Categories />
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
            onClick={ this.handleClick }
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
      </div>
    );
  }
}

export default App;
