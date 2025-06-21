import React from 'react';
import { useCart } from '../components/CartContext';

function Cart() {
  const { items, remove, total } = useCart();

  return (
    <div>
      <h1>Корзина</h1>
      {items.length === 0 && <p>Корзина пуста</p>}
      <ul>
        {items.map((p, i) => (
          <li key={i}>
            {p.title} - {p.price} ₸
            <button onClick={() => remove(i)}>Удалить</button>
          </li>
        ))}
      </ul>
      <p>Итого: {total} ₸</p>
      <button disabled={!items.length}>Оформить</button>
    </div>
  );
}

export default Cart;
