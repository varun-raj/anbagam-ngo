// components/LocationSection.tsx
import { Badge } from "@/components/ui/badge";
import { MealCard } from "@/components/MealCard";
import { type Center } from "@/lib/config";

interface LocationSectionProps {
  center: Center;
  index: number;
}

const bgColors = [
  "bg-amber-50",
  "bg-teal-50",
  "bg-stone-50",
];

export function LocationSection({ center, index }: LocationSectionProps) {
  return (
    <section className={`py-14 px-4 ${bgColors[index % bgColors.length]}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-stone-800">{center.name}</h3>
            <Badge variant="outline" className="text-teal-700 border-teal-200 bg-teal-50">
              {center.residents} residents
            </Badge>
          </div>
          <p className="text-stone-500 flex items-center gap-1">
            <span>📍</span> {center.location}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {center.meals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
