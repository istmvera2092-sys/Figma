import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold">Английский для путешествий</div>
              <div className="text-sm text-muted-foreground">Открой мир без границ</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2026 Курс «Английский для путешествий»</p>
            <p>Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
