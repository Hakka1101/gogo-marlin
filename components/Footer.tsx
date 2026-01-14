import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    fetch('metadata.json')
      .then(res => res.json())
      .then(data => setMetadata(data))
      .catch(err => console.error('Failed to load metadata:', err));
  }, []);

  const snsLinks = metadata?.sns || {};
  const contactInfo = metadata?.contactInfo || {};

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-[#287580] tracking-tighter mb-6 block">
              GOGO MARLIN
            </Link>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              栃木県宇都宮市にて、ITに特化した就労支援を通じて、障がいのある方の「働きたい」を全力でサポートしています。
            </p>
            <div className="flex space-x-4">
              {snsLinks.instagram && (
                <SocialIcon 
                  href={snsLinks.instagram}
                  label="Instagram"
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>} 
                />
              )}
              {snsLinks.twitter && (
                <SocialIcon 
                  href={snsLinks.twitter}
                  label="X (Twitter)"
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>} 
                />
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-[#287580] transition-colors">ホーム</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-[#287580] transition-colors">事業所について</Link></li>
              <li><Link to="/service" className="text-gray-500 hover:text-[#287580] transition-colors">サービス内容</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-[#287580] transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Information</h4>
            <div className="text-gray-500 text-sm space-y-4">
              <p>{contactInfo.address || "栃木県宇都宮市京町5-17"}</p>
              <p>TEL: {contactInfo.tel || "028-XXX-XXXX"}</p>
              <p>Mail: {contactInfo.email || "info@gogomarlin.com"}</p>
              <p className="text-[#287580] font-bold">{contactInfo.company || "sora合同会社"}</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2023 GOGOマーリン. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <Link to="/about" className="hover:text-gray-600 transition-colors underline decoration-[#287580]/30">アクセシビリティについて</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode, href: string, label: string }> = ({ icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#287580] hover:text-white hover:border-transparent transition-all shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;