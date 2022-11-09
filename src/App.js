import React, { Component } from 'react';

class App extends Component {
  state = {
    listItems: [],
  };

  render() {
    const { listItems } = this.state;
    return (
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
    );
  }
}

export default App;
