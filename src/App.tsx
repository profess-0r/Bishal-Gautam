import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileContactBar } from './components/MobileContactBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ApproachPage } from './pages/ApproachPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  // Initialize route from current window.location.pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    return path || '/';
  });

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title whenever route changes
  useEffect(() => {
    let title = 'Bishal Gautam — Sales, Marketing & Business Development';
    switch (currentPath) {
      case '/':
        title = 'Bishal Gautam — Sales, Marketing & Business Development';
        break;
      case '/about':
        title = 'About Bishal Gautam — Perspective & Background';
        break;
      case '/expertise':
        title = 'Core Expertise — Sales, B2B Acquisition & Expansion | Bishal Gautam';
        break;
      case '/approach':
        title = 'Strategic Approach — 5-Stage Growth Framework | Bishal Gautam';
        break;
      case '/contact':
        title = 'Discuss a Business Opportunity — Contact Bishal Gautam';
        break;
      default:
        title = 'Page Not Found — Bishal Gautam';
        break;
    }
    document.title = title;
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/expertise':
        return <ExpertisePage onNavigate={handleNavigate} />;
      case '/approach':
        return <ApproachPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  const normalizedPageRoute: PageRoute =
    currentPath === '/' ||
    currentPath === '/about' ||
    currentPath === '/expertise' ||
    currentPath === '/approach' ||
    currentPath === '/contact'
      ? (currentPath as PageRoute)
      : '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#111827]">
      {/* Top Bar Contract Navigation */}
      <Navbar currentPath={normalizedPageRoute} onNavigate={handleNavigate} />

      {/* Main Content Area (add bottom padding on mobile when persistent bar is present) */}
      <main id="main-content" className={`flex-1 ${currentPath !== '/contact' ? 'pb-16 md:pb-0' : ''}`}>
        {renderCurrentPage()}
      </main>

      {/* Persistent Mobile Contact Shortcut (hidden on desktop and on /contact) */}
      <MobileContactBar currentPath={normalizedPageRoute} onNavigate={handleNavigate} />

      {/* Editorial Compact Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
