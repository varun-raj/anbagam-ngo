// components/Navbar.tsx
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        <div>
          <h1 className="font-bold text-stone-800 text-lg leading-none">Anbagam</h1>
          <p className="text-xs text-stone-500">Nourishing lives, one meal at a time</p>
        </div>
      </div>
    </nav>
  );
}
