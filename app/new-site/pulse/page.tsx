import Link from "next/link";

const updates = [
  {
    date: "March 16, 2025",
    title: "Visit to Mahabalipuram",
    description:
      "Residents of Anbagam enjoyed a memorable outing to Mahabalipuram — taking in the ocean breeze, the ancient temples, and the joy of an excursion outside the center. Days like these are an important part of holistic rehabilitation.",
    type: "Outing",
    typeColor: "bg-teal-100 text-teal-700",
  },
  {
    date: "2025",
    title: "Vocational Training Initiatives",
    description:
      "Residents participate in practical skill-building activities including handicrafts, basic vocational tasks, and garden maintenance. These activities provide purpose, structure, and a sense of accomplishment.",
    type: "Program",
    typeColor: "bg-blue-100 text-blue-700",
  },
  {
    date: "2025",
    title: "Farming & Organic Garden",
    description:
      "The organic vegetable garden at the Vichur center continues to flourish. Residents tend to the garden as part of their daily routine — growing vegetables that contribute to the center's kitchen and giving residents a meaningful connection to the land.",
    type: "Program",
    typeColor: "bg-green-100 text-green-700",
  },
  {
    date: "2024–2025",
    title: "Community Celebrations",
    description:
      "Anbagam marks festivals, birthdays, and special occasions with the residents. These celebrations are a reminder that joy and community are part of recovery. Events are shared on Instagram and YouTube regularly.",
    type: "Event",
    typeColor: "bg-purple-100 text-purple-700",
  },
];

export default function PulsePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Updates
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pulse</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            The latest news, activities, and happenings from Anbagam&rsquo;s centers.
          </p>
        </div>
      </section>

      {/* Social media note */}
      <section className="py-8 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm text-center sm:text-left">
            Videos and photos are shared regularly on Instagram and YouTube.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://www.instagram.com/anbagamrehabilitationcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@AnbagamRehabilitationCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Recent Activity</h2>
          <div className="flex flex-col gap-4">
            {updates.map((update, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-blue-900">{update.title}</h3>
                    <p className="text-slate-400 text-xs mt-0.5">{update.date}</p>
                  </div>
                  <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${update.typeColor}`}>
                    {update.type}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Social links */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Follow Our Journey</h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Photos, videos, and stories from Anbagam&rsquo;s daily life are regularly posted on our
            social media pages. Follow us to stay connected with the community and see the impact
            of your support.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.instagram.com/anbagamrehabilitationcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex items-center gap-4 hover:border-pink-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-blue-900 text-sm group-hover:text-pink-600 transition-colors">Instagram</p>
                <p className="text-slate-500 text-xs">@anbagamrehabilitationcenter</p>
                <p className="text-slate-400 text-xs mt-0.5">Photos & Stories</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/@AnbagamRehabilitationCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex items-center gap-4 hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-blue-900 text-sm group-hover:text-red-600 transition-colors">YouTube</p>
                <p className="text-slate-500 text-xs">Anbagam Rehabilitation Center</p>
                <p className="text-slate-400 text-xs mt-0.5">Videos & Documentaries</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
          <Link
            href="/new-site/2025"
            className="flex-1 border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            2025 Highlights
          </Link>
          <Link
            href="/new-site/reports"
            className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            Reports & Publications
          </Link>
        </div>
      </section>
    </>
  );
}
