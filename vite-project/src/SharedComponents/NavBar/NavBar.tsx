import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // تأكد من تثبيت مكتبة lucide-react أو استبدالها بأيقونة لديك
import { useSelector } from 'react-redux';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  // استخراج عدد العناصر في السلة من Redux Toolkit (كمثال)
  const cartItemsCount = useSelector((state: any) => state.cart?.items?.length || 0);

  return (
    <header className="w-full bg-[#121212] text-white py-4 px-6 md:px-12 border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* روابط التنقل اليسرى */}
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className="px-4 py-2 rounded-xl bg-neutral-900 text-sm font-medium hover:text-neutral-300 transition"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="px-4 py-2 rounded-xl border border-neutral-800 text-sm font-medium text-neutral-400 hover:text-white transition"
          >
            Products
          </Link>
        </nav>

        {/* الشعار في المنتصف */}
        <div className="text-xl font-bold tracking-wider cursor-pointer" onClick={() => navigate('/')}>
          Style<span className="text-[#C5B39C]">.</span>Loom
        </div>

        {/* الأيقونات وزر الاتصال على اليمين */}
        <div className="flex items-center gap-4">
          {/* أيقونة السلة مع عداد العناصر */}
          <button 
            onClick={() => navigate('/cart')} // أو فتح الـ Cart Modal
            className="relative p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C5B39C] text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* زر التواصل */}
          <Link 
            to="/contact" 
            className="px-5 py-2.5 rounded-xl bg-[#C5B39C] text-black font-medium text-sm hover:opacity-90 transition"
          >
            Contact
          </Link>
        </div>

      </div>
    </header>
  );
};