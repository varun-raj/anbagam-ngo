// components/Navbar.tsx
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://anbagam.org/anbagam-logo.png?v=2.0.01-of-7-nov-2025"
            alt="Anbagam Logo"
            width={48}
            height={48}
            className="h-10 w-auto object-contain"
            unoptimized
          />
          <div>
            <h1 className="font-bold text-blue-900 text-lg leading-none tracking-tight">
              Anbagam
            </h1>
            <p className="text-xs text-blue-400 tracking-wide uppercase font-medium mt-0.5">
              An Initiative by TERDOD
            </p>
          </div>
        </div>
        <span className="hidden sm:block text-xs text-blue-300 italic">
          Restoring dignity &amp; transforming lives
        </span>
      </div>
    </nav>
  );
}
