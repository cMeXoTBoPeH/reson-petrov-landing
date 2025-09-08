import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity duration-300"
            >
              {/* Company Logo */}
              <img 
                src={`${process.env.PUBLIC_URL}/2222233333.png`}
                alt="Резон-Петров 90 Logo" 
                className="w-8 h-8 object-contain"
              />
              
              {/* Company Name */}
              <span className="text-3xl font-bold text-white">
                Резон-Петров 90
              </span>
            </button>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Водеща консултантска компания в България, специализирана в управленски системи 
                и ISO стандарти. Помагаме на компаниите да постигнат най-високите стандарти 
                за качество, екология и безопасност.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:info@reson-petrov90.bg"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="tel:+35921234567"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Бързи връзки</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Услуги
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Процес
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Индустрии
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    За нас
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Въпроси
                  </button>
                </li>
              </ul>
            </div>

            {/* ISO Standards */}
            <div>
              <h3 className="text-lg font-semibold mb-6">ISO стандарти</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300">ISO 9001</span>
                </li>
                <li>
                  <span className="text-gray-300">ISO 14001</span>
                </li>
                <li>
                  <span className="text-gray-300">ISO 27001</span>
                </li>
                <li>
                  <span className="text-gray-300">ISO 45001</span>
                </li>
                <li>
                  <span className="text-gray-300">ISO 22000</span>
                </li>
                <li>
                  <span className="text-gray-300">GDPR</span>
                </li>
                <li>
                  <span className="text-gray-300">HACCP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Резон-Петров 90. Всички права запазени.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Политика за поверителност
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Условия за ползване
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
