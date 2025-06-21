import React from 'react';
import { useCart } from './CartContext';

function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} ₸ / {product.unit}</p>
      <button onClick={() => add(product)}>В корзину</button>
    </div>
  );
}

export default ProductCard;
