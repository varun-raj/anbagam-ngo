// components/GallerySection.tsx — dining hall photo strip
import Image from "next/image";

export function GallerySection() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-blue-900 mb-1">Every Meal Matters</h3>
        <p className="text-sm text-slate-500 mb-6">
          A glimpse into daily mealtimes across our centers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="/media/dining-1.jpg"
              alt="Residents having a meal together"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="/media/dining-2.jpg"
              alt="Residents dining at Anbagam care center"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
