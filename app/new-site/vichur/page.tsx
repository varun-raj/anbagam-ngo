import Link from "next/link";

export default function VichurPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Centers
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Anbagam Rehabilitation Center
          </h1>
          <p className="text-blue-200 text-base mb-3">Thirunilai, Vichur — Main Center</p>
          <p className="text-blue-300 italic text-sm">
            &ldquo;Service to Humanity, Service to God&rdquo;
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {/* Address */}
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-blue-900 text-sm">Address</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                A. Kulandaivel &mdash; Nachammal Nagar,<br />
                Thirunilai Village,<br />
                Vichur Post,<br />
                Chennai &mdash; 600 103
              </p>
              <a
                href="https://maps.app.goo.gl/2W4WGuDhCoBH48PU6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Open in Google Maps
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="font-semibold text-blue-900 text-sm">Contact</span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+919444009988" className="text-sm text-blue-600 font-medium hover:text-blue-800 block">+91-9444009988</a>
                  <a href="tel:+918807865616" className="text-sm text-blue-600 font-medium hover:text-blue-800 block">+91-8807865616</a>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">WhatsApp</p>
                  <a href="https://wa.me/919444009988" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium hover:text-blue-800 block">
                    +91-9444009988
                  </a>
                  <a href="https://wa.me/918807865616" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium hover:text-blue-800 block">
                    +91-8807865616
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:anbagam.help@gmail.com" className="text-sm text-blue-600 font-medium hover:text-blue-800">
                    anbagam.help@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About this center */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 mb-6">
            <h2 className="font-bold text-blue-900 mb-3">The Main Center</h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              The Thirunilai / Vichur center is Anbagam&rsquo;s original and main rehabilitation facility,
              established in 2002. Located in Thirunilai Village near Red Hills, this center was
              the first permanent home for residents rescued from the streets of Chennai.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              The center features spacious residential blocks for men, a modern kitchen (upgraded
              with support from the Azim Premji Foundation), organic vegetable gardens maintained
              by residents, and landscaped grounds that provide a peaceful environment for recovery.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              This is where the majority of Anbagam&rsquo;s residents live, and where the organization&rsquo;s
              care model was developed and refined over more than two decades.
            </p>
          </div>

          {/* Motto card */}
          <div
            className="rounded-xl p-6 text-white text-center"
            style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
          >
            <p className="text-blue-300 text-xs uppercase tracking-widest mb-3">Our Motto</p>
            <p className="text-white text-xl font-bold italic">
              &ldquo;Service to Humanity, Service to God&rdquo;
            </p>
            <p className="text-blue-200 text-sm mt-3">
              The guiding principle behind every action at Anbagam since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
          <Link
            href="/new-site/donate"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-center"
          >
            Donate
          </Link>
          <Link
            href="/new-site/be-a-volunteer"
            className="flex-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-3 rounded-xl transition-colors text-center"
          >
            Volunteer
          </Link>
          <Link
            href="/new-site/contact"
            className="flex-1 border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-5 py-3 rounded-xl transition-colors text-center"
          >
            All Centers
          </Link>
        </div>
      </section>
    </>
  );
}
