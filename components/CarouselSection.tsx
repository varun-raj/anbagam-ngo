"use client";
// components/CarouselSection.tsx
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const ALL = Array.from({ length: 18 }, (_, i) => `/media/gallery-${String(i + 1).padStart(2, "0")}.jpg`);

const ROW1 = [...ALL.slice(0, 9),  ...ALL.slice(0, 9)];
const ROW2 = [...ALL.slice(9, 18), ...ALL.slice(9, 18)];

export function CarouselSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close  = useCallback(() => setLightbox(null), []);
  const prev   = useCallback(() => setLightbox(i => i === null ? null : (i + ALL.length - 1) % ALL.length), []);
  const next   = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % ALL.length), []);

  // Keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, close, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openAt = (rowOffset: number, idx: number) => setLightbox((rowOffset + idx) % ALL.length);

  return (
    <section className="py-12 bg-slate-900 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Our Centers in Action</h3>
        <p className="text-sm text-slate-400">Tap any photo to view full size.</p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3 overflow-hidden">
        <div className="flex gap-3 w-max animate-scroll-left">
          {ROW1.map((src, i) => (
            <button
              key={i}
              onClick={() => openAt(0, i % 9)}
              className="flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Anbagam photo ${(i % 9) + 1}`}
                width={160}
                height={112}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="flex gap-3 w-max animate-scroll-right">
          {ROW2.map((src, i) => (
            <button
              key={i}
              onClick={() => openAt(9, i % 9)}
              className="flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Anbagam photo ${(i % 9) + 10}`}
                width={160}
                height={112}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Image container — stop propagation so clicking image doesn't close */}
          <div
            className="relative max-w-[92vw] max-h-[85vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={ALL[lightbox]}
              alt={`Anbagam photo ${lightbox + 1}`}
              width={900}
              height={700}
              className="max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
            {lightbox + 1} / {ALL.length}
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}

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
