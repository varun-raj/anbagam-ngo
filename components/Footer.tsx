// components/Footer.tsx
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="py-12 px-6 text-blue-200"
      style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="https://anbagam.org/anbagam-logo.png?v=2.0.01-of-7-nov-2025"
          alt="Anbagam Logo"
          width={64}
          height={64}
          className="h-12 w-auto object-contain mx-auto mb-4 opacity-90"
          unoptimized
        />
        <h3
          className="text-xl font-bold text-white mb-1"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          Anbagam
        </h3>
        <p className="text-xs text-blue-400 uppercase tracking-widest mb-4">
          An Initiative by TERDOD
        </p>
        <p
          className="text-sm text-blue-300 italic max-w-sm mx-auto"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          &ldquo;Restoring dignity and transforming lives&rdquo;
        </p>
        <div className="mt-6 pt-6 border-t border-blue-900/60 text-xs text-blue-500">
          © {new Date().getFullYear()} Anbagam · TERDOD. Operating since 1999.
        </div>
      </div>
    </footer>
  );
}
