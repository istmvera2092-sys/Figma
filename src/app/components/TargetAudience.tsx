import { Users, GraduationCap } from "lucide-react";

export function TargetAudience() {
  const groups = [
    {
      title: "Первая группа",
      subtitle: "4–5 класс",
      icon: Users,
      color: "from-primary to-accent"
    },
    {
      title: "Вторая группа",
      subtitle: "6–8 класс",
      icon: GraduationCap,
      color: "from-secondary to-accent"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            📌 Для кого курс
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${group.color} mb-6`}>
                <group.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
              <p className="text-xl text-muted-foreground">{group.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
