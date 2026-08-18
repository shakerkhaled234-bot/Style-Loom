import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const categories = [
    "TANK TOP", "T-SHIRT", "LONG-SLEEVE T-SHIRT", 
    "RAGLAN SLEEVE SHIRT", "CROP TOP", "V-NECK SHIRT", "MUSCLE SHIRT"
  ];

  return (
    <footer className="w-full bg-[#121212] text-neutral-400 pt-10 pb-6 border-t border-neutral-800">
      
      {/* شريط التصنيفات المتحرك */}
      <div className="overflow-hidden whitespace-nowrap border-b border-neutral-800 pb-8 mb-12">
        <div className="inline-flex items-center gap-8 animate-marquee text-neutral-300 text-sm tracking-widest px-4">
          {categories.map((cat, index) => (
            <div key={index} className="inline-flex items-center gap-4">
              <span>{cat}</span>
              <span className="w-2 h-2 rounded-full bg-[#C5B39C] inline-block"></span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* قسم الشعار وأيقونات السوشيال ميديا */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-800 pb-12 mb-12 gap-6">
          <div className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            Style<span className="text-[#C5B39C]">.</span>Loom
          </div>

          <div className="flex items-center gap-4">
            {/* Instagram Icon */}
            <a href="#" aria-label="Instagram" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Dribbble Icon */}
            <a href="#" aria-label="Dribbble" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.129 10.596c-.378-.067-2.427-.381-4.707.311-.144-.316-.293-.632-.446-.944 2.535-1.077 3.324-2.585 3.395-2.721 1.055 1.01 1.71 2.43 1.758 3.354zm-3.325-5.343c-.114.156-.838 1.144-3.21 2.152-1.258-2.316-2.673-4.225-2.822-4.431 2.464-.698 4.793.189 6.032 2.279zm-7.618-2.09c.162.22 1.554 2.102 2.793 4.387-1.196.384-2.529.623-3.924.703-.314-1.057-.643-2.179-.974-3.308.647-.565 1.341-1.157 2.105-1.782zm-4.786 3.493c.319 1.107.636 2.213.94 3.256-1.579.467-3.292.515-3.483.518-.041-.351-.063-.707-.063-1.066 0-1.053.376-2.018 1.006-2.708zm-1.637 4.544c.32-.004 2.222-.054 3.931-.603.323 1.077.643 2.185.955 3.31-2.428.771-4.453 1.251-4.661 1.301-.154-.622-.236-1.272-.236-1.942 0-.69.011-1.371.011-2.066zm5.845 7.424c.312-1.096.619-2.175.923-3.226 1.396.441 2.89.704 4.474.793-.729 1.631-1.79 3.037-2.115 3.461-1.158-.337-2.222-.67-3.282-1.028zm6.549-1.71c.361-.469 1.353-1.785 2.05-3.324 2.051.785 3.731 1.706 3.905 1.803-.521 1.168-1.411 2.128-2.537 2.744-.457-.272-2.203-1.154-3.418-1.223z"/>
              </svg>
            </a>

            {/* Twitter / X Icon */}
            <a href="#" aria-label="Twitter" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Behance */}
            <a href="#" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition font-bold text-sm flex items-center justify-center w-11 h-11">Bē</a>
          </div>
        </div>

        {/* الروابط ونشرة البريد الإلكتروني */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-800">
          <div>
            <h3 className="text-white font-semibold mb-4">Home</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#why-us" className="hover:text-white transition">Why Us</Link></li>
              <li><Link to="/#about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/#testimonials" className="hover:text-white transition">Testimonials</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition">FAQ&apos;s</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=menswear" className="hover:text-white transition">Menswear</Link></li>
              <li><Link to="/products?category=womenswear" className="hover:text-white transition">Womenswear</Link></li>
              <li><Link to="/products?category=kidswear" className="hover:text-white transition">Kidswear</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe to Newsletter</h3>
            <form onSubmit={(e) => { e.preventDefault(); }} className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
              <button type="submit" aria-label="Submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* الحقوق السفلية */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-neutral-500 gap-4">
          <p>© 2024 StyleLoom. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};