import React, { Component } from 'react';
import Categories from './components/Categories';

import './style/App.css';

class App extends Component {
  state = {
    listItems: [],
  };

  render() {
    const { listItems } = this.state;
    return (
      <div className="appContainer">
        <Categories />
        <div>
          <input type="text" />
          {
            listItems.length !== 0 ? null : (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
