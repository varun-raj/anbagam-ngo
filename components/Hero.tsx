// components/Hero.tsx
export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #0f2b5b 0%, #1a4a9e 55%, #2563eb 100%)",
      }}
    >
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-200 mb-5 border border-blue-400/40 px-4 py-1.5 rounded-full">
          25 Years of Service · Since 1999
        </span>
        <h2
          className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight"
        >
          Service to Humanity,<br />
          <em className="not-italic text-blue-200">Service to God</em>
        </h2>
        <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We assist the abandoned in living life with dignity through quality
          health, nutritional care and occupational therapy — across three
          centers in Chennai.
        </p>

        {/* Stats — 2×2 on mobile, single row on sm+ */}
        <div className="mt-10 grid grid-cols-2 sm:flex sm:justify-center gap-6 sm:gap-10">
          {[
            { value: "370+", label: "Residents" },
            { value: "3",    label: "Care Centers" },
            { value: "4",    label: "Meals Daily" },
            { value: "25",   label: "Years of Service" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                {stat.value}
              </div>
              <div className="text-xs text-blue-300 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
