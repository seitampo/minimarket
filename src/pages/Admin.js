import React, { useState } from 'react';
import productsData from '../data/products';

function Admin() {
  const [products, setProducts] = useState(productsData);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const addProduct = () => {
    const newProd = { id: Date.now().toString(), title, price: Number(price), unit: '', category, image: 'https://via.placeholder.com/100' };
    setProducts([...products, newProd]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1>Админка</h1>
      <input placeholder="Название" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Цена" value={price} onChange={e => setPrice(e.target.value)} />
      <input placeholder="Категория" value={category} onChange={e => setCategory(e.target.value)} />
      <button onClick={addProduct}>Добавить</button>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.title} - {p.price}
            <button onClick={() => removeProduct(p.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
