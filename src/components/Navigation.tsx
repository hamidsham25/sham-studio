'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Beobachte alle Sektionen
    const sections = ['hero', 'services', 'portfolio', 'about', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '#about', label: 'Über mich', id: 'about' },
    { href: '#contact', label: 'Kontakt', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-secondary-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-secondary-900">
              Sham Studio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-primary-600 scale-105 font-semibold'
                    : 'text-secondary-600 hover:text-primary-600 hover:scale-105'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full animate-pulse"></div>
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Projekt starten
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-secondary-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50 font-semibold scale-105'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 rounded-r-full"></div>
                  )}
                </a>
              ))}
              <a
                href="#contact"
                className="block mx-3 mt-4 btn btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Projekt starten
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
