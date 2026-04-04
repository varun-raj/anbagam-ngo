// components/MealCard.tsx — horizontal list row, mobile-responsive
import { buildUpiLink, type Meal } from "@/lib/config";

interface MealCardProps {
  meal: Meal;
  isLast?: boolean;
}

export function MealCard({ meal, isLast = false }: MealCardProps) {
  const upiLink = buildUpiLink(meal.amount, meal.note);

  return (
    <div
      className={`py-4 px-4 sm:px-5 group hover:bg-blue-50/60 transition-colors duration-150 ${
        !isLast ? "border-b border-blue-100" : ""
      }`}
    >
      {/* Mobile: stacked two-line layout | Desktop: single row */}
      <div className="flex items-center gap-3">
        {/* Icon bubble */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-100 flex items-center justify-center text-lg sm:text-xl">
          {meal.icon}
        </div>

        {/* Name + label */}
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-blue-900 text-sm sm:text-base">
            {meal.name}
          </span>
          <span className="block text-xs text-slate-500 mt-0.5 uppercase tracking-wide">
            Daily contribution
          </span>
        </div>

        {/* Amount — hidden on smallest screens, shown sm+ */}
        <div className="hidden sm:block flex-shrink-0 text-right mr-3">
          <span className="text-xl font-bold text-blue-800">
            ₹{meal.amount.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Donate button — desktop */}
        <a
          href={upiLink}
          className="hidden sm:inline-flex flex-shrink-0 items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150 shadow-sm hover:shadow-md"
        >
          Donate
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Mobile second row: amount + full-width donate button */}
      <div className="flex items-center gap-3 mt-3 sm:hidden">
        <div className="w-10 flex-shrink-0" /> {/* spacer aligns with icon above */}
        <span className="text-lg font-bold text-blue-800 flex-1">
          ₹{meal.amount.toLocaleString("en-IN")}
        </span>
        <a
          href={upiLink}
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-blue-600 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150 shadow-sm"
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
