import { MessageCircle, Users, Gamepad2, TrendingUp } from "lucide-react";

export function WhySpecial() {
  const features = [
    {
      title: "Акцент на практическую, живую речь",
      description: "а не на грамматику ради грамматики",
      icon: MessageCircle,
    },
    {
      title: "Все ситуации — из реальной жизни путешественника",
      description: "Никакой теории без применения",
      icon: Users,
    },
    {
      title: "Интерактивные задания",
      description: "ролевые игры, аудиоситуации, мини-квесты",
      icon: Gamepad2,
    },
    {
      title: "Ребёнок выходит на уровень A2–B1",
      description: "(Pre-Intermediate) за курс",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            ✨ Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-card to-muted/30 border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 group overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
