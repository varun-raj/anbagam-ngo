import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default function ReportsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Reports</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            Annual reports, brochures, and publications from Anbagam&rsquo;s 25+ years of service.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Publications</h2>

          {/* 25-year brochure card */}
          <div className="bg-white rounded-xl border-2 border-blue-200 shadow-sm p-6 mb-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-blue-900 text-base mb-1">
                      25-Year Celebration Brochure
                    </h3>
                    <p className="text-slate-500 text-sm mb-1">1999 – 2024</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      A commemorative publication marking 25 years of Anbagam&rsquo;s service —
                      highlighting milestones, stories of transformation, and the vision for the future.
                    </p>
                  </div>
                </div>
                <a
                  href="https://anbagam.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  View on anbagam.org
                </a>
              </div>
            </div>
          </div>

          {/* Coming soon note */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-center">
            <svg
              className="w-10 h-10 text-slate-300 mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-semibold text-slate-700 mb-2">Past Reports Coming Soon</h3>
            <p className="text-slate-500 text-sm">
              Past annual reports will be available in due course. Check back here for updates,
              or visit the official website at{" "}
              <a
                href="https://anbagam.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                anbagam.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Stay updated */}
      <section className="py-10 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Stay Updated</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.instagram.com/anbagamrehabilitationcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex items-center gap-4 hover:border-blue-300 transition-all"
            >
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm">Instagram</p>
                <p className="text-slate-400 text-xs">@anbagamrehabilitationcenter</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/@AnbagamRehabilitationCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex items-center gap-4 hover:border-blue-300 transition-all"
            >
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm">YouTube</p>
                <p className="text-slate-400 text-xs">Anbagam Rehabilitation Center</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Nav links */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
          <Link
            href="/new-site/pulse"
            className="flex-1 border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            Pulse — Recent Updates
          </Link>
          <Link
            href="/new-site/2025"
            className="flex-1 border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-4 py-2.5 rounded-xl transition-colors text-center text-sm"
          >
            2025 Highlights
          </Link>
        </div>
      </section>
    </>
  );
}
