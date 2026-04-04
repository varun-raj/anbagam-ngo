// components/ImpactSection.tsx
import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="bg-white border-b border-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center gap-8">

        {/* Portrait image */}
        <div className="flex-shrink-0 w-40 h-48 sm:w-44 sm:h-52 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/media/portrait.jpg"
            alt="Anbagam resident"
            width={176}
            height={208}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <blockquote>
          <p className="text-xl sm:text-2xl font-semibold text-blue-900 leading-snug mb-3">
            &ldquo;We assist the abandoned in living life with dignity.&rdquo;
          </p>
          <footer className="text-sm text-slate-400 uppercase tracking-widest">
            Anbagam · An Initiative by TERDOD
          </footer>
        </blockquote>

      </div>
    </section>
  );
}
