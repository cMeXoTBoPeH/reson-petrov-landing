import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-50"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-brand-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-brand-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-max text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Compass Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="w-20 h-20 lg:w-24 lg:h-24 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer Circle */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#0284c7" strokeWidth="4"/>
                
                {/* Inner Circle */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#0369a1" strokeWidth="3"/>
                
                {/* Compass Needle - North */}
                <line x1="50" y1="15" x2="50" y2="35" stroke="#dc2626" strokeWidth="5" strokeLinecap="round"/>
                <polygon points="50,10 45,20 55,20" fill="#dc2626"/>
                
                {/* Compass Needle - South */}
                <line x1="50" y1="65" x2="50" y2="85" stroke="#6b7280" strokeWidth="5" strokeLinecap="round"/>
                <polygon points="50,90 45,80 55,80" fill="#6b7280"/>
                
                {/* Center Dot */}
                <circle cx="50" cy="50" r="5" fill="#0284c7"/>
                
                {/* Direction Markers */}
                <text x="50" y="12" textAnchor="middle" fontSize="14" fill="#0284c7" fontWeight="bold">N</text>
                <text x="88" y="55" textAnchor="middle" fontSize="12" fill="#6b7280">E</text>
                <text x="50" y="95" textAnchor="middle" fontSize="12" fill="#6b7280">S</text>
                <text x="12" y="55" textAnchor="middle" fontSize="12" fill="#6b7280">W</text>
              </svg>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Резон-Петров 90
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light animate-slide-up">
            Експерти в управленски системи и ISO стандарти
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Помагаме на компаниите да внедрят и поддържат най-високите стандарти за качество, 
            екология, информационна сигурност и безопасност на труда.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Получете оферта
            </button>
            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              Безплатна консултация
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-gray-400 mb-6">Доверени от компании в различни индустрии</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-300 font-semibold">ISO 9001</div>
              <div className="text-gray-300 font-semibold">ISO 14001</div>
              <div className="text-gray-300 font-semibold">ISO 27001</div>
              <div className="text-gray-300 font-semibold">ISO 45001</div>
              <div className="text-gray-300 font-semibold">GDPR</div>
              <div className="text-gray-300 font-semibold">HACCP</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
