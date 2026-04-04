import Link from "next/link";

export default function RoyapettahPage() {
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
            Anbagam Royapettah
          </h1>
          <p className="text-blue-200 text-sm mb-4">
            Opposite Express Avenue Mall (7th Gate), Chennai
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-100">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Operating since 1999
          </div>
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
                26/47 Bharathi Salai 1st Street<br />
                (Pycrofts Road 1st Street),<br />
                Padupakkam, Royapettah,<br />
                opposite Express Avenue Mall (7th Gate),<br />
                Chennai &mdash; 600 014
              </p>
              <a
                href="https://maps.app.goo.gl/ygxEX1bByX8bo2Hr9"
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
                  <a href="tel:+918807865616" className="text-sm text-blue-600 font-medium hover:text-blue-800 block">+91-8807865616</a>
                  <a href="tel:+914426605865" className="text-sm text-blue-600 font-medium hover:text-blue-800 block">+91-44-2660-5865</a>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/918807865616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-medium hover:text-blue-800"
                  >
                    +91-8807865616
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">General Inquiry</p>
                  <a href="tel:+919444009988" className="text-sm text-blue-600 font-medium hover:text-blue-800">+91-9444009988</a>
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

          {/* CSR Recognition */}
          <div
            className="rounded-xl p-5 text-white mb-8"
            style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">CSR Implementation Agency</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Anbagam is recognized as a CSR (Corporate Social Responsibility) Implementation Agency
                  by the Indian Institute of Corporate Affairs (IICA), Ministry of Corporate Affairs,
                  Government of India. Companies can partner with us for meaningful CSR activities.
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
            <h2 className="font-bold text-blue-900 mb-3">About This Center</h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              The Royapettah center is conveniently located in the heart of Chennai, opposite the
              Express Avenue Mall. This central location makes it accessible for visitors, volunteers,
              and those bringing individuals in need of care.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Operating under Anbagam&rsquo;s umbrella since 1999, this center embodies the same mission:
              rescuing mentally ill individuals from streets, providing them with quality care,
              and restoring their dignity.
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
