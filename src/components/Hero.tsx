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
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
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
