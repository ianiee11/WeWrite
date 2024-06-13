import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

import Home from './components/Home';
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import Order from './components/OrderForm';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes> {/* Updated to Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> {/* Updated to Routes */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
