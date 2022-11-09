import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <div data-testid="product">
        { title }
      </div>
    );
  }
}

SearchItem.propTypes = {
  title: PropTypes.string,
}.isRequired;
