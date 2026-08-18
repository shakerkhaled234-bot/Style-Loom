import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './SharedComponents/NavBar/NavBar';
import { Footer } from './SharedComponents/Footer/Footer';

// استيراد الصفحات الأربع
import Home from './pages/Home';
import Products from './pages/Product/Product';
import ProductOpen from './pages/Product-open/Product-open';
import Contact from './pages/Contact/Contact';

// مكون التخطيط المشترك (Layout) الذي يثبت الناف بار والفوتر
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductOpen />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;