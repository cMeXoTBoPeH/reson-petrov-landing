import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-brand-600 transition-colors duration-300"
            >
              Резон-Петров 90
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium"
            >
              Процес
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium"
            >
              Индустрии
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium"
            >
              За нас
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium"
            >
              Въпроси
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Свържете се с нас
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium py-2"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="block w-full text-left text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium py-2"
              >
                Процес
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="block w-full text-left text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium py-2"
              >
                Индустрии
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium py-2"
              >
                За нас
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-gray-700 hover:text-brand-600 transition-colors duration-300 font-medium py-2"
              >
                Въпроси
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Свържете се с нас
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
