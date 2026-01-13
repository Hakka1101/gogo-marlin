import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', path: '/' },
    { name: '事業所について', path: '/about' },
    { name: 'サービス内容', path: '/service' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-300 sticky top-0 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold tracking-tighter text-[#287580]`}>
              GOGO MARLIN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#287580] ${
                  location.pathname === link.path ? 'text-[#287580] border-b-2 border-[#287580]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consultation"
              className="bg-[#287580] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1e5a63] transition-all shadow-lg shadow-cyan-900/10"
            >
              無料相談・見学
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#287580] focus:outline-none"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-[#287580] hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#287580] text-white px-3 py-4 rounded-md text-base font-semibold"
            >
              無料相談・見学
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;