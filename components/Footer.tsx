
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-[#287580] tracking-tighter mb-6 block">
              GOGO MARLIN
            </Link>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              栃木県宇都宮市にて、ITに特化した就労支援を通じて、障害のある方の「働きたい」を全力でサポートしています。
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>} />
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
              <p>栃木県宇都宮市京町5-17</p>
              <p>TEL: 028-XXX-XXXX</p>
              <p>Mail: info@gogomarlin.com</p>
              <p className="text-[#287580] font-bold">sora合同会社</p>
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

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#287580] hover:text-white hover:border-transparent transition-all shadow-sm">
    {icon}
  </a>
);

export default Footer;
