"use client";
// components/Hero.tsx
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden px-6 py-12 sm:py-16"
      style={{
        background: "linear-gradient(135deg, #0f2b5b 0%, #1a4a9e 55%, #2563eb 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left: text + stats */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-200 mb-5 border border-blue-400/40 px-4 py-1.5 rounded-full">
              25 Years of Service · Since 1999
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Service to Humanity,<br />
              <em className="not-italic text-blue-200">Service to God</em>
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              We assist the abandoned in living life with dignity through quality
              health, nutritional care and occupational therapy — across three
              centers in Chennai.
            </p>
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
              {[
                { value: "370+", label: "Residents" },
                { value: "3",    label: "Care Centers" },
                { value: "4",    label: "Meals Daily" },
                { value: "25",   label: "Years of Service" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-300 uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: video */}
          <div ref={containerRef} className="w-full lg:w-[480px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                ref={videoRef}
                controls
                playsInline
                className="w-full block"
                src="/media/hero.mp4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
