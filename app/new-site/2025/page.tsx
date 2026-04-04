import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const highlights = [
  {
    title: "XMAS 2025 Celebration",
    description:
      "Anbagam celebrated Christmas 2025 with residents across all centers. The event included music, food, decorations, and a festive gathering that brought joy to hundreds of residents. Video content from the celebration is available on our YouTube channel.",
    videoLink: "https://www.youtube.com/@AnbagamRehabilitationCenter",
    type: "Event",
    typeColor: "bg-red-100 text-red-700",
  },
  {
    title: "New Facility Fundraising Progress",
    description:
      "2025 saw significant momentum in fundraising for the new 300-bed facility at Devandhavakkam. The K.R. Baliga family made a landmark donation of Rs 1 crore+, bringing the campaign closer to its Rs 3 crore goal.",
    type: "Milestone",
    typeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Resident Outings",
    description:
      "Residents enjoyed several outings in 2025, including a visit to Mahabalipuram in March. These trips are an important part of holistic care — providing new experiences, connection, and a sense of normalcy.",
    type: "Program",
    typeColor: "bg-teal-100 text-teal-700",
  },
  {
    title: "Vocational Training Expansion",
    description:
      "Anbagam continued and expanded its vocational training initiatives in 2025, helping residents build skills, develop routines, and regain a sense of purpose through meaningful work and creative activities.",
    type: "Program",
    typeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Social Media Growth",
    description:
      "Anbagam\u2019s Instagram and YouTube channels saw increased activity in 2025, with regular posts showcasing life at the centers, events, and the impact of supporter contributions. Follow us to stay connected.",
    type: "Update",
    typeColor: "bg-purple-100 text-purple-700",
  },
];

export default function Updates2025Page() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">2025 Highlights</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            A look back at the key moments, milestones, and memories from Anbagam in 2025.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-5">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-blue-900">{item.title}</h3>
                  <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${item.typeColor}`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.description}
                </p>
                {item.videoLink && (
                  <a
                    href={item.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-red-600 font-medium hover:text-red-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch on YouTube
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-2">See It All on Social Media</h2>
          <p className="text-slate-600 text-sm mb-6">
            Full video content, photo galleries, and event coverage are available on our social media channels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.youtube.com/@AnbagamRehabilitationCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube Channel
            </a>
            <a
              href="https://www.instagram.com/anbagamrehabilitationcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
          <Link
            href="/new-site/pulse"
            className="flex-1 border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            Pulse — Recent Updates
          </Link>
          <Link
            href="/new-site/reports"
            className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            Reports & Publications
          </Link>
          <Link
            href="/new-site/donate"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            Support Anbagam
          </Link>
        </div>
      </section>
    </>
  );
}
