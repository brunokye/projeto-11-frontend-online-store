import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

import '../style/Categories.css';

function Categories({ onClick }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categoriesContainer">
      {categories.map((category) => (
        <button
          onClick={ onClick }
          type="button"
          data-testid="category"
          key={ category.id }
          value={ category.id }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

Categories.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Categories;
