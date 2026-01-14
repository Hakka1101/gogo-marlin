import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

const AccessibilityToolbar: React.FC = () => {
  const { fontSize, setFontSize } = useAccessibility();

  return (
    <div className="bg-[#f0f7f8] border-b border-[#287580]/10 py-2 px-4 sm:px-6 lg:px-8 text-xs text-gray-600 flex justify-center sm:justify-between items-center relative z-20" role="region" aria-label="アクセシビリティ設定">
      <div className="flex items-center space-x-6">
        <span className="font-bold text-[#287580] hidden sm:inline text-[10px] tracking-widest uppercase">Accessibility Support</span>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-bold text-gray-400">文字サイズ:</span>
          <div className="flex bg-white rounded-full p-0.5 border border-gray-100 shadow-sm">
            <button 
              onClick={() => setFontSize('normal')}
              className={`px-4 py-1 rounded-full text-[10px] font-bold transition-all ${fontSize === 'normal' ? 'bg-[#287580] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              aria-pressed={fontSize === 'normal'}
            >標準</button>
            <button 
              onClick={() => setFontSize('large')}
              className={`px-4 py-1 rounded-full text-[10px] font-bold transition-all ${fontSize === 'large' ? 'bg-[#287580] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              aria-pressed={fontSize === 'large'}
            >大きく</button>
            <button 
              onClick={() => setFontSize('huge')}
              className={`px-4 py-1 rounded-full text-[10px] font-bold transition-all ${fontSize === 'huge' ? 'bg-[#287580] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              aria-pressed={fontSize === 'huge'}
            >最大</button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block text-[10px] text-gray-400 font-medium">
        個別のニーズに合わせた閲覧環境を提供しています
      </div>
    </div>
  );
};

export default AccessibilityToolbar;