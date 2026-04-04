// components/MealCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildUpiLink, type Meal } from "@/lib/config";

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  const upiLink = buildUpiLink(meal.amount, meal.note);

  return (
    <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-stone-100">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{meal.icon}</span>
          <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-full">
            daily
          </span>
        </div>
        <h4 className="font-semibold text-stone-700 mb-1">{meal.name}</h4>
        <p className="text-2xl font-bold text-teal-700 mb-4">
          ₹{meal.amount.toLocaleString("en-IN")}
        </p>
        <a href={upiLink}>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium">
            Donate via UPI
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
