// components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="font-semibold text-stone-200">Anbagam</span>
        </div>
        <p className="text-sm">
          Serving nutritious meals to those who need it most — every single day.
        </p>
        <p className="text-xs mt-4 text-stone-600">
          © {new Date().getFullYear()} Anbagam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
