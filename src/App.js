import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { CartProvider } from './components/CartContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <nav>
          <Link to="/">Каталог</Link> |{' '}
          <Link to="/cart">Корзина</Link> |{' '}
          <Link to="/login">Вход</Link> |{' '}
          <Link to="/admin">Админка</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
