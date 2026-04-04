import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { centers } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {centers.map((center, i) => (
        <LocationSection key={center.name} center={center} index={i} />
      ))}
      <Footer />
    </main>
  );
}
