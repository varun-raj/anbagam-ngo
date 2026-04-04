// components/Navbar.tsx
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + title */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Anbagam Logo"
            width={44}
            height={44}
            className="w-11 h-11 object-contain flex-shrink-0"
          />
          <div>
            <p className="font-bold text-blue-900 text-base leading-tight tracking-tight">
              Anbagam
            </p>
            <p className="text-xs text-blue-500 font-medium leading-tight">
              An Initiative By TERDOD
            </p>
          </div>
        </div>

        {/* Right: visit website */}
        <a
          href="https://www.anbagam.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Visit Website
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
