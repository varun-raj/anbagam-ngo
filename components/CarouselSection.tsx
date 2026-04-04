"use client";
// components/CarouselSection.tsx — two rows, opposite directions, CSS-only infinite scroll
import Image from "next/image";

const ALL = Array.from({ length: 18 }, (_, i) => `/media/gallery-${String(i + 1).padStart(2, "0")}.jpg`);

// Split into two rows of 9, duplicated for seamless loop
const ROW1 = [...ALL.slice(0, 9),  ...ALL.slice(0, 9)];
const ROW2 = [...ALL.slice(9, 18), ...ALL.slice(9, 18)];

export function CarouselSection() {
  return (
    <section className="py-12 bg-slate-900 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Our Centers in Action</h3>
        <p className="text-sm text-slate-400">Daily life across Anbagam's care centers.</p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3 overflow-hidden">
        <div className="flex gap-3 w-max animate-scroll-left">
          {ROW1.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Anbagam center photo ${i + 1}`}
                width={160}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="flex gap-3 w-max animate-scroll-right">
          {ROW2.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Anbagam center photo ${i + 10}`}
                width={160}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left  { animation: scroll-left  28s linear infinite; }
        .animate-scroll-right { animation: scroll-right 28s linear infinite; }
      `}</style>
    </section>
  );
}
