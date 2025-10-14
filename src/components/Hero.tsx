
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-16 lg:pt-18 scroll-mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-50"></div>
      
      
      <div className="container-max text-center relative z-10 pt-0 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Company Logo */}
          <div className="flex justify-center mb-2 sm:mb-2 animate-fade-in">
            <img 
              src={`${process.env.PUBLIC_URL}/LogoRPTransperant.png`}
              alt="Резон-Петров 90 Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
              loading="eager"
              width="192"
              height="192"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            Резон-Петров 90 – Консултации и внедряване на международни стандарти
          </h1>
          
          {/* Tagline */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 sm:mb-6 font-light animate-slide-up leading-relaxed">
            Разработване на управленски системи съгласно международни стандарти
          </h2>
          
          {/* Description */}
          <div className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
            <p className="mb-6">
              Помагаме на компаниите да внедрят и поддържат системи за управление на качество, 
              екология, информационна сигурност, безопасност на храните, безопасност при работа и безопасност при движение по пътищата. 
              Предлагаме <strong>професионални консултации</strong> и подготвяме фирми за <strong>успешна сертификация</strong>.
            </p>
            <p className="mb-6">
              С над 30 години опит в <strong>ISO 9001</strong>, <strong>ISO 14001</strong>, <strong>ISO 27001</strong>, 
              <strong>ISO 45001</strong>, <strong>ISO 22001</strong>, <strong>ISO 39001</strong>, <strong>ISO 50001</strong>, 
              <strong>EMAS</strong>, <strong>GDPR</strong> и <strong>HACCP</strong>, сме водещи консултанти в България. 
              Разгледайте нашите <a href="#services" className="text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200">услуги</a> за повече информация.
            </p>
            <p className="mb-0">
              Работим с малки и средни предприятия в различни сектори, като осигуряваме персонализиран подход 
              и професионална поддръжка за постигане на <strong>международни стандарти</strong>. <a href="#contact" className="text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200">Свържете се с нас</a> за безплатна консултация.
            </p>
          </div>
          
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
