import { Users, ArrowRight, Sparkles } from "lucide-react";

export function CallToAction() {
  return (
    <section id="registration" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-1 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 blur-xl animate-pulse"></div>
          
          <div className="relative bg-[#0a0e1a] rounded-[22px] p-8 sm:p-12">
            <div className="text-center space-y-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  📢 Набор открыт!
                </h2>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                  Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
                </p>
                <div className="flex items-center justify-center gap-2 text-secondary">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Места ограничены!</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                👉 Запишитесь сейчас — и следующее путешествие станет первым, 
                где ваш ребёнок заговорит по-английски без страха!
              </p>

              {/* CTA Button */}
              <button
                onClick={() => window.open('https://example.com/register', '_blank')}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg sm:text-xl">Записаться на курс</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Trust signals */}
              <div className="pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10</div>
                  <div className="text-sm text-muted-foreground">уроков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">6</div>
                  <div className="text-sm text-muted-foreground">детей макс.</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">A2-B1</div>
                  <div className="text-sm text-muted-foreground">уровень</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
