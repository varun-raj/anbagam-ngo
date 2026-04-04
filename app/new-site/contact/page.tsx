import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const centers = [
  {
    name: "Anbagam Vichur (Main Center)",
    address: "A. Kulandaivel - Nachammal Nagar, Thirunilai Village, Vichur Post, Chennai - 600 103",
    phones: ["+91 9498385306", "+91 94440 09988"],
    email: "anbagam.help@gmail.com",
    mapUrl: "https://maps.app.goo.gl/2W4WGuDhCoBH48PU6",
    mapLabel: "Open in Google Maps",
    badge: "Main Center",
  },
  {
    name: "Anbagam CDH Shelter (Tondiarpet)",
    address: "No. 187, T.H. Road, Chennai - 600 081",
    phones: ["+91 8807865616", "044 26605865"],
    email: "anbagam.help@gmail.com",
    mapUrl: null,
    mapLabel: null,
    badge: "City Center",
  },
  {
    name: "Anbagam Otteri (Women's Shelter)",
    address:
      "No. 5, Subbarayan Main Street, Nammalwarpet, Otteri, Chennai - 600012 (opposite GOVT Polytechnic College)",
    phones: ["044-26605864", "+91 8807865616"],
    email: "anbagam.help@gmail.com",
    mapUrl: "https://maps.app.goo.gl/7trzbWtqTvDADmpc7",
    mapLabel: "Open in Google Maps",
    badge: "Women's Shelter",
  },
  {
    name: "Anbagam Royapettah",
    address:
      "26/47 Bharathi Salai 1st Street (Pycrofts Road 1st Street), Padupakkam, Royapettah, opposite Express Avenue Mall (7th Gate), Chennai - 600 014",
    phones: ["+91-8807865616", "+91-44-2660-5865"],
    email: "anbagam.help@gmail.com",
    mapUrl: "https://maps.app.goo.gl/ygxEX1bByX8bo2Hr9",
    mapLabel: "Open in Google Maps",
    badge: "Royapettah",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            Reach out to any of our centers for inquiries, to report a case, or to discuss
            volunteering and donations.
          </p>
        </div>
      </section>

      {/* Centers */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Centers</h2>
          <div className="flex flex-col gap-5">
            {centers.map((center) => (
              <div
                key={center.name}
                className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-blue-50 flex items-center justify-between gap-3">
                  <h3 className="font-bold text-blue-900 text-base">{center.name}</h3>
                  <span className="flex-shrink-0 text-xs bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full font-medium">
                    {center.badge}
                  </span>
                </div>
                <div className="px-5 py-4 flex flex-col gap-3">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-sm text-slate-700 leading-relaxed">{center.address}</p>
                  </div>
                  {/* Phones */}
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div className="flex flex-col gap-0.5">
                      {center.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a
                      href={`mailto:${center.email}`}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      {center.email}
                    </a>
                  </div>
                  {/* Map */}
                  {center.mapUrl && (
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      <a
                        href={center.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors inline-flex items-center gap-1"
                      >
                        {center.mapLabel}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Contact */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-6">General Inquiries</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="tel:+919444009988"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex flex-col items-center text-center hover:border-blue-300 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Call</p>
              <p className="text-sm font-semibold text-blue-900">+91 94440 09988</p>
            </a>
            <a
              href="https://wa.me/919444009988"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex flex-col items-center text-center hover:border-blue-300 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">WhatsApp</p>
              <p className="text-sm font-semibold text-blue-900">+91 94440 09988</p>
            </a>
            <a
              href="mailto:anbagam.help@gmail.com"
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex flex-col items-center text-center hover:border-blue-300 transition-all group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
              <p className="text-sm font-semibold text-blue-900 break-all">anbagam.help@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
