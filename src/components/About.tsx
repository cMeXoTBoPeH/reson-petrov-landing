import React from 'react';

const About: React.FC = () => {
  const differentiators = [
    {
      title: '30+ години опит',
      description: 'Дългогодишен опит в консултирането и внедряването на управленски системи.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Персонализиран подход',
      description: 'Всяко решение е адаптирано според специфичните нужди на вашата организация.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: '100% успешност',
      description: 'Висок процент на успешно сертифициране на нашите клиенти.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Продължителна поддръжка',
      description: 'Не спираме да подпомагаме след сертифицирането - предлагаме дългосрочна поддръжка.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              За нас
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Резон-Петров 90</strong> е водеща консултантска компания 
                в България, специализирана в управленски системи и ISO стандарти. С над 30 години опит, 
                ние сме помогнали на стотици компании да постигнат най-високите стандарти за качество, 
                екология и безопасност.
              </p>
              <p>
                Нашият екип от сертифицирани експерти работи с компании от различни индустрии - 
                от производство и IT до здравеопазване, транспорт и логистика. Разбираме, че всяка организация 
                е уникална и изисква персонализиран подход.
              </p>
              <p>
                Нашата мисия е да помогнем на българските компании да се конкурират на международния 
                пазар чрез внедряване на най-добрите практики и стандарти за управление.
              </p>
            </div>
            
            <div className="mt-8">
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

          {/* Right side - Differentiators */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Защо да изберете нас?
            </h3>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mx-auto lg:mx-0">
                    {item.icon}
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-600 mb-2">30+</div>
              <div className="text-gray-600">Години опит</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-600 mb-2">200+</div>
              <div className="text-gray-600">Успешни проекта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-600 mb-2">100%</div>
              <div className="text-gray-600">Успешност</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-600 mb-2">15+</div>
              <div className="text-gray-600">ISO стандарта</div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Нашият екип
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Работим с сертифицирани експерти, които имат дълбоки познания в различните ISO стандарти 
            и богат опит в различни индустрии.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Сертифицирани консултанти</h4>
              <p className="text-gray-600">Експерти с международни сертификати</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Обучители</h4>
              <p className="text-gray-600">Специалисти в обучението на персонал</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Аудитори</h4>
              <p className="text-gray-600">Опитни вътрешни и външни аудитори</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


