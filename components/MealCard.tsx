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
      className={`flex flex-col sm:flex-row sm:items-center gap-3 py-4 px-4 sm:px-5 hover:bg-blue-50/60 transition-colors duration-150 ${
        !isLast ? "border-b border-blue-100" : ""
      }`}
    >
      {/* Row 1 on mobile: icon + name */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
          {meal.icon}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-blue-900 text-sm sm:text-base leading-snug">
            {meal.name}
          </p>
          <p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">
            Daily contribution
          </p>
        </div>
      </div>

      {/* Row 2 on mobile: amount + donate — indented to align under name */}
      <div className="flex items-center gap-3 pl-[52px] sm:pl-0">
        <span className="flex-1 sm:flex-none text-lg sm:text-xl font-bold text-blue-800 sm:mr-3">
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
  );
}
