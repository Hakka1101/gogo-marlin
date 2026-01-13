import React, { createContext, useContext, useState } from 'react';

type FontSize = 'normal' | 'large' | 'huge';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    let scale = '1';
    if (size === 'large') scale = '1.25';
    if (size === 'huge') scale = '1.5';
    document.documentElement.style.setProperty('--font-scale', scale);
  };

  return (
    <AccessibilityContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};