import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28 scroll-mt-24">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-50"></div>
      
      
      <div className="container-max text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Company Logo */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
            <img 
              src={`${process.env.PUBLIC_URL}/2222233333.png`}
              alt="Резон-Петров 90 Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              loading="eager"
              width="96"
              height="96"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            Резон-Петров 90 - ISO Сертификация в България
          </h1>
          
          {/* Tagline */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 font-light animate-slide-up leading-relaxed">
            Разработване на управленски системи съгласно международни стандарти
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
            Помагаме на компаниите да внедрят и поддържат ситеми за управление на качество, 
            екология, информационна сигурност, безопасност на храните, безопастност при работа и безопастност при движение по пътищата.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="btn-primary w-full sm:w-auto text-center"
            >
              Получете оферта
            </button>
            <button
              onClick={scrollToContact}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Безплатна консултация
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 9001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 14001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 27001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 39001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 22001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 45001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">ISO 50001</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">EMAS</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">SSC</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">GDPR</div>
              <div className="text-gray-500 font-semibold text-sm sm:text-base">HACCP</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
