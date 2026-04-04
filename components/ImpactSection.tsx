// components/ImpactSection.tsx
import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="bg-white border-b border-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center gap-8">

        {/* Portrait image */}
        <div className="flex-shrink-0 w-48 h-60 sm:w-56 sm:h-72 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/media/portrait.jpg"
            alt="Anbagam resident"
            width={224}
            height={288}
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
