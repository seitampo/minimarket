import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ['Все', ...new Set(products.map(p => p.category))];

function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Все');

  const filtered = products.filter(p =>
    (category === 'Все' || p.category === category) &&
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Каталог</h1>
      <input
        placeholder="Поиск"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default Home;
