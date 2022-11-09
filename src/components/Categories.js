import React, { useState } from 'react';
import { getCategories } from '../services/api';

import '../style/Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  getCategories().then((data) => setCategories(data));
  return (
    <div className="categoriesContainer">
      {categories.map((category) => (
        <button
          type="button"
          data-testid="category"
          key={ category.id }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
