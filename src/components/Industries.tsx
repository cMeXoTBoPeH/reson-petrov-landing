import React from 'react';

const Industries: React.FC = () => {
  const industries = [
    {
      name: 'Производство',
      description: 'ISO 9001, ISO 14001, ISO 45001 за производствени предприятия',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001']
    },
    {
      name: 'IT и технологии',
      description: 'ISO 27001, GDPR за IT компании и технологични стартъпи',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      standards: ['ISO 27001', 'GDPR', 'ISO 9001', 'ISO 20000']
    },
    {
      name: 'Здравеопазване',
      description: 'ISO 9001, ISO 14001 за болници и здравни заведения',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 15189']
    },
    {
      name: 'Логистика',
      description: 'ISO 9001, ISO 14001 за транспортни и логистични компании',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 28000']
    },
    {
      name: 'Хранителна промишленост',
      description: 'ISO 22000, HACCP за хранителни предприятия',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      standards: ['ISO 22000', 'HACCP', 'ISO 9001', 'ISO 14001']
    },
    {
      name: 'Строителство',
      description: 'ISO 9001, ISO 14001, ISO 45001 за строителни компании',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 19650']
    }
  ];

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Индустрии, които обслужваме
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Имаме богат опит в различни сектори и разбираме специфичните изисквания 
            на всяка индустрия за успешно внедряване на управленски системи.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-brand-600 mb-6 group-hover:text-brand-700 transition-colors duration-300">
                {industry.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {industry.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Подходящи стандарти:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.standards.map((standard, standardIndex) => (
                    <span
                      key={standardIndex}
                      className="px-3 py-1 bg-brand-50 text-brand-700 text-sm font-medium rounded-full"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-brand-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Не намерихте вашата индустрия?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Нашият екип има опит в множество различни сектори. Свържете се с нас 
              за да обсъдим как можем да помогнем на вашата организация.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Свържете се с нас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
