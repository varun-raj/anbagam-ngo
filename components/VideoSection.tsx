// components/VideoSection.tsx
export function VideoSection() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-blue-900 mb-1">See Our Work</h3>
        <p className="text-sm text-slate-500 mb-5">
          A look inside Anbagam's care centers.
        </p>
        <div className="rounded-xl overflow-hidden shadow-md bg-black">
          <video
            controls
            playsInline
            className="w-full block"
            src="/media/hero.mp4"
          />
        </div>
      </div>
    </section>
  );
}
