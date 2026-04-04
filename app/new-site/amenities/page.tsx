import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const amenityCategories = [
  {
    title: "Living & Comfort",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    items: [
      "Spacious, well-ventilated residential rooms",
      "Modern, hygienic kitchen",
      "Shared dining hall for communal meals",
      "Common courtyard with comfortable seating areas",
      "TV room for entertainment and recreation",
    ],
  },
  {
    title: "Health & Wellness",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    items: [
      "Regular medical check-ups and health monitoring",
      "Medication management — administered 1–3 times daily as required",
      "Clean, well-maintained bathrooms and sanitation",
      "Healthy, balanced meals with daily menu variation",
      "Doctor-charted individual rehabilitation plans",
    ],
  },
  {
    title: "Support Services",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    items: [
      "Personal care, grooming assistance, and daily hygiene support",
      "Individual guidance and emotional support from staff",
      "Newspaper and magazine subscriptions for reading and engagement",
    ],
  },
  {
    title: "Recreational & Therapeutic",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    items: [
      "Organic vegetable garden — maintained by and for residents, building purpose and skill",
      "Beautifully landscaped grounds for outdoor time",
      "Quiet leisure areas for rest and reflection",
      "Volunteer visits bringing conversations, activities, and companionship",
      "Community celebrations and events throughout the year",
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Life at Anbagam
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Amenities & Care</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            We believe that quality care means more than just shelter and medicine. Every resident
            deserves comfort, dignity, and a life worth living.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-6">
            {amenityCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-3 px-5 py-4 border-b border-blue-50 bg-slate-50">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <h2 className="text-base font-bold text-blue-900">{category.title}</h2>
                </div>
                <ul className="px-5 py-4 flex flex-col gap-2.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meals callout */}
      <section className="py-10 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-xl p-6 text-white text-center"
            style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
          >
            <h3 className="text-lg font-bold mb-2">Nutrition & Meals</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Every resident receives three nutritious, balanced meals daily. Our kitchen, modernized
              with support from the Azim Premji Foundation, prepares fresh food for 250+ residents
              every day — with daily variation to ensure dietary diversity and wellbeing.
            </p>
            <p className="text-blue-200 text-xs">
              Rs 21,000 sponsors a full day of meals for all residents. Rs 3,500 covers one
              person&rsquo;s comprehensive care for a day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
