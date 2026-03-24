import { Monitor, Headphones, Wifi, Video } from "lucide-react";

export function Requirements() {
  const requirements = [
    {
      icon: Monitor,
      text: "Стационарный компьютер или ноутбук"
    },
    {
      icon: Headphones,
      text: "Наушники и микрофон"
    },
    {
      icon: Wifi,
      text: "Стабильный интернет"
    },
    {
      icon: Video,
      text: "Zoom"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            💻 Что потребуется
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                <req.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-foreground">{req.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
