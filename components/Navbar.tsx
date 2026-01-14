import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'ホーム', path: '/' },
    { name: '事業所について', path: '/about' },
    { name: 'サービス内容', path: '/service' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tighter text-[#287580] group-hover:opacity-80 transition-opacity">
              GOGO MARLIN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-[#287580] ${
                  location.pathname === link.path ? 'text-[#287580] relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#287580]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#287580] text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#1e5a63] transition-all shadow-lg shadow-cyan-900/10 hover:shadow-cyan-900/20 transform hover:-translate-y-0.5"
            >
              無料相談・見学
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#287580] focus:outline-none p-2"
              aria-label="メニュー"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 w-full animate-fadeInUp">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                  location.pathname === link.path ? 'bg-[#f0f7f8] text-[#287580]' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#287580] text-white py-4 rounded-2xl text-base font-bold shadow-lg"
              >
                無料相談・見学
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;