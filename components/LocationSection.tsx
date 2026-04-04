// components/LocationSection.tsx
import { MealCard } from "@/components/MealCard";
import { type Center } from "@/lib/config";

interface LocationSectionProps {
  center: Center;
  index: number;
}

const accentColors = [
  "border-blue-500",
  "border-blue-400",
  "border-blue-600",
];

export function LocationSection({ center, index }: LocationSectionProps) {
  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className={`border-l-4 pl-5 mb-6 ${accentColors[index % accentColors.length]}`}>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3
              className="text-2xl font-bold text-blue-900"
            >
              {center.name}
            </h3>
            <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-0.5 rounded-full">
              {center.residents} residents
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {center.location}, Chennai
          </p>
        </div>

        {/* Meal list */}
        <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
          {center.meals.map((meal, i) => (
            <MealCard
              key={meal.name}
              meal={meal}
              isLast={i === center.meals.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
