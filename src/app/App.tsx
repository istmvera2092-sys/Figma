import { Hero } from "./components/Hero";
import { TargetAudience } from "./components/TargetAudience";
import { Curriculum } from "./components/Curriculum";
import { WhySpecial } from "./components/WhySpecial";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Pricing } from "./components/Pricing";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <TargetAudience />
      <Curriculum />
      <WhySpecial />
      <Requirements />
      <Schedule />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}
