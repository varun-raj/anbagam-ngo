import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const stats = [
  { value: "400+", label: "Residents" },
  { value: "3", label: "Centers" },
  { value: "25+", label: "Years" },
  { value: "CSR", label: "Recognized" },
];

const quickLinks = [
  { label: "Our Story", href: "/new-site/our-story", icon: "📖" },
  { label: "Trustees", href: "/new-site/trustees", icon: "👥" },
  { label: "Amenities", href: "/new-site/amenities", icon: "🏠" },
  { label: "Infrastructure", href: "/new-site/infrastructure", icon: "🏗️" },
  { label: "Royapettah Center", href: "/new-site/royapettah", icon: "📍" },
  { label: "Vichur Center", href: "/new-site/vichur", icon: "📍" },
  { label: "Donate", href: "/new-site/donate", icon: "💙" },
  { label: "Volunteer", href: "/new-site/be-a-volunteer", icon: "🤝" },
  { label: "Contact Us", href: "/new-site/contact", icon: "✉️" },
  { label: "FAQs", href: "/new-site/faqs", icon: "❓" },
  { label: "Pulse", href: "/new-site/pulse", icon: "📰" },
  { label: "Appeal", href: "/new-site/appeal", icon: "🎯" },
];

export default function NewSiteHome() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-4 font-medium">
            Anbagam · An Initiative by TERDOD
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Restoring Dignity and Transforming Lives
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            For over 25 years, Anbagam has been rescuing mentally ill men and women from the streets
            of Chennai, providing compassionate rehabilitation, quality care, and a path back to dignity.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl py-4 px-2 border border-white/20"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-blue-200 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/new-site/donate"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Support Anbagam
            </Link>
            <Link
              href="/new-site/our-story"
              className="inline-block border border-white/40 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
            <p className="text-blue-900 text-base leading-relaxed mb-4">
              Anbagam rescues mentally ill men and women from the streets, provides them with quality
              medical care, nutritious meals, and a safe, nurturing environment — restoring their
              dignity and helping them rebuild their lives.
            </p>
            <p className="text-blue-900 text-base leading-relaxed mb-4">
              Founded in 1999 by Mohammed Rafi from his own residence, Anbagam has grown into a
              multi-center rehabilitation network under the TERDOD trust, serving over 400 residents
              across three locations in Chennai.
            </p>
            <div className="border-t border-blue-200 pt-4 mt-4">
              <p className="text-blue-700 font-semibold italic text-center">
                &ldquo;Service to Humanity, Service to God&rdquo;
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900 mb-1">Rescue</h3>
              <p className="text-sm text-slate-600">Identifying and rescuing mentally ill individuals from roads and public spaces.</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900 mb-1">Care</h3>
              <p className="text-sm text-slate-600">Medical care, medication, meals, grooming, and psychological support daily.</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900 mb-1">Dignity</h3>
              <p className="text-sm text-slate-600">Restoring dignity, independence, and a sense of purpose to each resident.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">How to Support Us</h2>
          <p className="text-slate-600 mb-6">
            Every contribution makes a real difference in the lives of our residents.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6 flex flex-col">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18-3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3m18-3V6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Make a Donation</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">
                Rs 3,500 covers a full day of care for one resident — meals, medication, and support.
                Rs 21,000 feeds all 250+ residents for a day.
              </p>
              <Link
                href="/new-site/donate"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors text-center"
              >
                Donate Now
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6 flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Become a Volunteer</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">
                Students, professionals, and anyone with a compassionate heart can volunteer —
                spend time with residents, share conversations, and bring a spark of joy.
              </p>
              <Link
                href="/new-site/be-a-volunteer"
                className="inline-block border border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors text-center"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Explore Anbagam</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <span className="text-2xl mb-2">{link.icon}</span>
                <span className="text-sm font-medium text-blue-900 group-hover:text-blue-600 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
