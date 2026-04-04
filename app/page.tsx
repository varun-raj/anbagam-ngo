import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";
import { CarouselSection } from "@/components/CarouselSection";
import { LocationSection } from "@/components/LocationSection";
import { BankSection } from "@/components/BankSection";
import { Footer } from "@/components/Footer";
import { centers } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactSection />
      <CarouselSection />
      {centers.map((center, i) => (
        <LocationSection key={center.name} center={center} index={i} />
      ))}
      <BankSection />
      <Footer />
    </main>
  );
}
