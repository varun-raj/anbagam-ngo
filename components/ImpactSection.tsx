// components/ImpactSection.tsx — B&W portrait with mission quote
import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900" style={{ minHeight: "360px" }}>
      {/* Portrait image */}
      <Image
        src="/media/portrait.jpg"
        alt="Anbagam resident"
        fill
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />

      {/* Gradient overlay — darker on left for text, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,30,64,0.92) 0%, rgba(10,30,64,0.70) 50%, rgba(10,30,64,0.40) 100%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <blockquote>
          <p className="text-2xl sm:text-3xl font-semibold text-white leading-snug max-w-xl mb-6">
            &ldquo;We assist the abandoned in living life with dignity.&rdquo;
          </p>
          <footer className="text-blue-300 text-sm uppercase tracking-widest">
            Anbagam · An Initiative by TERDOD
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
