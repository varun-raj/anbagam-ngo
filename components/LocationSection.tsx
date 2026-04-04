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
      <div className="max-w-5xl mx-auto">
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
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {center.location}, Chennai
            </span>
            {center.mapUrl && (
              <a
                href={center.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            )}
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
