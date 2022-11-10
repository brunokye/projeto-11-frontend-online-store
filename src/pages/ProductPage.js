import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

function ProductPage() {
  const { id } = useParams();

  const [data, setData] = useState({});

  const { title, thumbnail, price, attributes } = data;

  useEffect(() => {
    const fetchProduct = async () => {
      getProductById(id).then((response) => setData(response));
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          Carrinho
        </Link>
      </div>
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img
          data-testid="product-detail-image"
          src={ thumbnail }
          alt={ title }
        />
        <h2 data-testid="product-detail-price">
          R$
          {price}
        </h2>
        <ul>
          {attributes
            && attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name} : ${attribute.value_name}`}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
