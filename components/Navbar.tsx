// components/Navbar.tsx
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Image
          src="https://anbagam.org/anbagam-logo.png?v=2.0.01-of-7-nov-2025"
          alt="Anbagam"
          width={180}
          height={50}
          className="h-10 w-auto object-contain"
          unoptimized
        />
        <span className="hidden sm:block text-xs text-slate-500 italic">
          Restoring dignity &amp; transforming lives
        </span>
      </div>
    </nav>
  );
}
