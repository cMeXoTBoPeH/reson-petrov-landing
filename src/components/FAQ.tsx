import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Какво е ISO 9001 и защо е важно за моята компания?',
      answer: 'ISO 9001 е основополагащ стандарт за разработване на ситеми за управление. Той помага на организациите да подобрят ефективността, да намалят разходите и да увеличат удовлетвореността на клиентите. Сертифицирането показва, че вашата компания следва най-добрите практики за управление на качеството.'
    },
    {
      question: 'Колко време отнема внедряването на ISO стандарт?',
      answer: 'Времето за внедряване зависи от размера и сложността на организацията, както и от избрания стандарт. Обикновено процесът отнема между 3-6 месеца за малки и средни предприятия. Нашият екип ще направи детайлен анализ и ще ви предостави реалистичен график за вашия конкретен случай.'
    },
    {
      question: 'Какви са разходите за внедряване на ISO система?',
      answer: 'Разходите зависят от няколко фактора: размер на организацията, избран стандарт, сложност на процесите и необходимите обучения. Предлагаме безплатна първоначална консултация, където ще оценим вашите нужди и ще ви предоставим детайлна оферта без задължения.'
    },
    {
      question: 'Предоставяте ли обучение на нашия персонал?',
      answer: 'Да, обучението на персонала е неразделна част от нашите услуги. Предлагаме специализирани обучения за различните ISO стандарти, както и обучение за вътрешни одити. Всички наши обучения са практични и адаптирани според спецификата на вашата организация.'
    },
    {
      question: 'Какво се случва след сертифицирането?',
      answer: 'След сертифицирането предлагаме продължителна поддръжка за поддържане и подобряване на вашите системи. Това включва редовни прегледи, актуализиране на документация, подготовка за ресертифициране и консултации при нужда.'
    },
    {
      question: 'Можете ли да помогнете с няколко ISO стандарта едновременно?',
      answer: 'Абсолютно! Много от нашите клиенти внедряват няколко стандарта едновременно (например ISO 9001, ISO 14001 и ISO 45001). Това е дори по-ефективно, тъй като има припокриване в изискванията и можем да интегрираме системите за по-добра ефективност.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Често задавани въпроси
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ето отговорите на най-често задаваните въпроси за ISO стандартите 
            и нашите услуги. Ако не намерите отговора, който търсите, 
            не се колебайте да се свържете с нас.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-brand-600 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Имате други въпроси?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Нашият екип е тук, за да отговори на всички ваши въпроси и да ви помогне 
              да вземете най-доброто решение за вашата организация.
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

export default FAQ;


