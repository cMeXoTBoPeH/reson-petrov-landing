import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Анализ и планиране',
      description: 'Провеждаме детайлен анализ на вашата организация и разработваме персонализиран план за внедряване.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Разработване на документация',
      description: 'Създаваме цялостна документация, която отговаря на изискванията на съответния ISO стандарт.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Внедряване и обучение',
      description: 'Помагаме ви да внедрите новите процеси и обучим вашия екип за ефективното им използване.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Сертифициране и поддръжка',
      description: 'Подпомагаме процеса на сертифициране и предоставяме продължителна поддръжка за вашите системи.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Нашият процес
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Стъпка по стъпка, ние ви водим през целия процес на внедряване на управленски системи, 
            гарантирайки успешен резултат.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number and icon */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-brand-100 group-hover:border-brand-300 transition-colors duration-300">
                      <div className="text-brand-600 group-hover:text-brand-700 transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <svg className="w-6 h-6 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline benefits */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-2">30+</div>
              <div className="text-gray-600">Години опит</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-2">200+</div>
              <div className="text-gray-600">Успешни проекта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-2">98%</div>
              <div className="text-gray-600">Успешност при сертифициране</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
