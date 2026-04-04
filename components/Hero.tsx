// components/Hero.tsx
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-stone-50 to-teal-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
          Community Care
        </Badge>
        <h2 className="text-4xl font-bold text-stone-800 mb-4 leading-tight">
          Feed a Family,<br />
          <span className="text-amber-600">Change a Life</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
          Anbagam runs three care centers across Chennai, providing nutritious
          daily meals to over 370 residents. Your donation directly feeds a
          meal for the day.
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">370+</div>
            <div className="text-sm text-stone-500">Residents</div>
          </div>
          <div className="w-px bg-stone-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">3</div>
            <div className="text-sm text-stone-500">Centers</div>
          </div>
          <div className="w-px bg-stone-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">4</div>
            <div className="text-sm text-stone-500">Meals Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
}
