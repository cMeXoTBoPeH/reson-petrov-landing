import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Внедряване',
      description: 'Пълно внедряване на ISO стандарти и управленски системи според вашите нужди и изисквания.',
      features: [
        'Анализ на текущото състояние',
        'Разработване на документация',
        'Внедряване на процеси',
        'Обучение на персонала'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Поддръжка',
      description: 'Непрекъсната поддръжка и подобряване на вашите управленски системи за максимална ефективност.',
      features: [
        'Редовни прегледи',
        'Актуализиране на документация',
        'Мониторинг на показателите',
        'Подобряване на процесите'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Обучения',
      description: 'Специализирани обучения за вашия екип за ефективно управление на системите.',
      features: [
        'Обучения за ISO стандарти',
        'Управление на качеството',
        'Вътрешни аудити',
        'Сертифициране на персонал'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Подготовка за аудит',
      description: 'Професионална подготовка за успешно преминаване на външни и вътрешни аудити.',
      features: [
        'Преглед на документация',
        'Подготовка на екипа',
        'Симулация на аудит',
        'Следващи стъпки'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Нашите услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаме цялостни решения за внедряване и поддръжка на управленски системи, 
            които отговарят на най-високите международни стандарти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-brand-600 mb-6 group-hover:text-brand-700 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Готови да започнем?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Свържете се с нас за безплатна консултация и персонализирана оферта за вашия проект.
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
              Получете безплатна оферта
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
