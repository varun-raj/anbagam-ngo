// components/MealCard.tsx — horizontal list row
import { buildUpiLink, type Meal } from "@/lib/config";

interface MealCardProps {
  meal: Meal;
  isLast?: boolean;
}

export function MealCard({ meal, isLast = false }: MealCardProps) {
  const upiLink = buildUpiLink(meal.amount, meal.note);

  return (
    <div
      className={`flex items-center gap-4 py-4 px-5 group hover:bg-blue-50/60 transition-colors duration-150 ${
        !isLast ? "border-b border-blue-100" : ""
      }`}
    >
      {/* Icon bubble */}
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl">
        {meal.icon}
      </div>

      {/* Name */}
      <div className="flex-1 min-w-0">
        <span
          className="font-semibold text-blue-900 text-base"
        >
          {meal.name}
        </span>
        <span className="block text-xs text-slate-500 mt-0.5 uppercase tracking-wide">
          Daily contribution
        </span>
      </div>

      {/* Amount */}
      <div
        className="flex-shrink-0 text-right mr-4"
      >
        <span className="text-2xl font-bold text-blue-800">
          ₹{meal.amount.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Donate button */}
      <a
        href={upiLink}
        className="flex-shrink-0 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-sm hover:shadow-md"
      >
        Donate
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}
