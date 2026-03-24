import { 
  PlaneTakeoff, 
  Hotel, 
  UtensilsCrossed, 
  Map, 
  ShieldAlert, 
  Ticket, 
  Heart,
  Presentation
} from "lucide-react";

export function Curriculum() {
  const modules = [
    {
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      icon: PlaneTakeoff,
      color: "from-primary to-accent"
    },
    {
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      icon: Hotel,
      color: "from-secondary to-accent"
    },
    {
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении.",
      icon: UtensilsCrossed,
      color: "from-primary to-secondary"
    },
    {
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях.",
      icon: Map,
      color: "from-accent to-secondary"
    },
    {
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      icon: ShieldAlert,
      color: "from-destructive to-secondary"
    },
    {
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      icon: Ticket,
      color: "from-primary to-accent"
    },
    {
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или ��одростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения.",
      icon: Heart,
      color: "from-secondary to-primary"
    },
    {
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения.",
      icon: Presentation,
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            📚 Программа курса
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${module.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-7 h-7 text-white" />
              </div>
              <div className="mb-3">
                <span className="text-sm text-muted-foreground">Модуль {index + 1}</span>
                <h3 className="text-xl font-bold mt-1">{module.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {module.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary">
                  👉 {module.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
