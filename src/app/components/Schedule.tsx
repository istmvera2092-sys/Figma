import { Calendar, Clock } from "lucide-react";

export function Schedule() {
  const schedule = [
    {
      day: "Четверг",
      time: "15:00 (МСК)",
      group: "группа 4–5 класс"
    },
    {
      day: "Пятница",
      time: "15:30 (МСК)",
      group: "группа 6–8 класс"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            🕒 Расписание
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{item.day}</h3>
                  <p className="text-muted-foreground">{item.group}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-[72px]">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-lg">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
