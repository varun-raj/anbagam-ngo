// components/MealCard.tsx
import { buildUpiLink, type Meal } from "@/lib/config";

interface MealCardProps {
  meal: Meal;
  isLast?: boolean;
}

export function MealCard({ meal, isLast = false }: MealCardProps) {
  const upiLink = buildUpiLink(meal.amount, meal.note);

  return (
    <div
      className={`py-4 px-4 sm:px-5 hover:bg-blue-50/60 transition-colors duration-150 ${
        !isLast ? "border-b border-blue-100" : ""
      }`}
    >
      {/* Top row: icon + name + (desktop: amount & button) */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
          {meal.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-blue-900 text-sm sm:text-base leading-snug truncate">
            {meal.name}
          </p>
          <p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">
            Daily contribution
          </p>
        </div>

        {/* Desktop only: amount + donate button */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <span className="text-xl font-bold text-blue-800 mr-1">
            ₹{meal.amount.toLocaleString("en-IN")}
          </span>
          <a
            href={upiLink}
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Donate
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile only: amount + donate button on a separate row below */}
      <div className="flex items-center gap-3 mt-3 ml-[52px] sm:hidden">
        <span className="flex-1 text-base font-bold text-blue-800">
          ₹{meal.amount.toLocaleString("en-IN")}
        </span>
        <a
          href={upiLink}
          className="inline-flex items-center gap-1.5 bg-blue-600 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm"
        >
          Donate
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
