import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityPolicy from './pages/AccessibilityPolicy';
import { AccessibilityProvider } from './context/AccessibilityContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <AccessibilityToolbar />
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/accessibility-policy" element={<AccessibilityPolicy />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AccessibilityProvider>
  );
};

export default App;