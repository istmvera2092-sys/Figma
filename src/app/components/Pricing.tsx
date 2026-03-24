import { Check } from "lucide-react";

export function Pricing() {
  const options = [
    {
      title: "Полный курс",
      subtitle: "10 уроков",
      price: "12 000",
      currency: "руб",
      features: [
        "Все 10 уроков курса",
        "Комплексная программа",
        "Экономия 1 000 руб",
        "Доступ к материалам"
      ],
      highlighted: true
    },
    {
      title: "Абонемент",
      subtitle: "за урок",
      price: "1 300",
      currency: "руб / урок",
      features: [
        "Оплата помесячно",
        "Гибкость выбора",
        "Без долгосрочных обязательств",
        "Доступ к материалам"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            💳 Стоимость
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 ${
                option.highlighted
                  ? 'border-primary shadow-lg shadow-primary/20 scale-105'
                  : 'border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
              }`}
            >
              {option.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm">
                  Популярный выбор
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.subtitle}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {option.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{option.currency}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
