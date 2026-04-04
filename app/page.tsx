import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";
import { LocationSection } from "@/components/LocationSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { centers } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactSection />
      {centers.map((center, i) => (
        <LocationSection key={center.name} center={center} index={i} />
      ))}
      <GallerySection />
      <Footer />
    </main>
  );
}
