import Link from "next/link";

const banks = [
  {
    label: "Indian Overseas Bank",
    tag: "Domestic",
    tagColor: "bg-blue-100 text-blue-700",
    rows: [
      { key: "Account Name", value: "TERDOD" },
      { key: "Account No.", value: "008602000008527" },
      { key: "Branch", value: "Sowcarpet, Chennai 600079" },
      { key: "IFSC", value: "IOBA0000086" },
    ],
  },
  {
    label: "State Bank of India",
    tag: "Domestic",
    tagColor: "bg-blue-100 text-blue-700",
    rows: [
      { key: "Account Name", value: "TERDOD" },
      { key: "Account No.", value: "40221237952" },
      { key: "Branch", value: "Edayanchavadi" },
      { key: "IFSC", value: "SBIN0007595" },
    ],
  },
  {
    label: "State Bank of India",
    tag: "International (FCRA)",
    tagColor: "bg-teal-100 text-teal-700",
    rows: [
      { key: "Account Name", value: "Trust for Education and Rehabilitation of Disabled Orphans & Destitutes" },
      { key: "Account No.", value: "00000040145846960" },
      { key: "Branch", value: "New Delhi Main Branch" },
      { key: "IFSC", value: "SBIN0000691" },
      { key: "SWIFT", value: "SBININBB104" },
      { key: "FCRA No.", value: "075900916 (valid Oct 2028)" },
    ],
  },
];

export default function AppealPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Fundraising Campaign
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Help Us Build a New Home
          </h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We are raising Rs 3 crores to build a new 300-bed rehabilitation center for mentally ill
            men and women rescued from the streets of Tamil Nadu.
          </p>
          <Link
            href="/new-site/donate"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">The New Facility</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Location", value: "Devandhavakkam, near Uthukottai, Thiruvallur District" },
              { label: "Land Area", value: "15 Acres" },
              { label: "Building Size", value: "12,000 sq ft" },
              { label: "Perimeter Fencing", value: "5 Acres" },
              { label: "Capacity", value: "300+ Residents (men & women)" },
              { label: "Fundraising Goal", value: "Rs 3 Crores" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-blue-100 shadow-sm p-4">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-blue-900 font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Major donor highlight */}
          <div
            className="rounded-xl p-6 text-white mb-8"
            style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-blue-200 text-xs uppercase tracking-wide mb-1">Major Donor</p>
                <h3 className="text-white font-bold text-lg mb-1">K.R. Baliga Family</h3>
                <p className="text-blue-100 text-sm">
                  The K.R. Baliga family has made a landmark donation of{" "}
                  <span className="font-bold text-white">Rs 1 crore+</span> toward
                  the new facility, demonstrating incredible faith in Anbagam&rsquo;s mission.
                </p>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="bg-slate-50 rounded-xl p-5 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-blue-900">Fundraising Progress</span>
              <span className="text-sm text-blue-600 font-medium">Rs 1 Cr+ raised of Rs 3 Cr</span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: "36%" }} />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Approx. 36% of goal reached. Help us reach the remaining Rs 2 crores.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
            <h3 className="font-bold text-blue-900 mb-2">Why This Matters</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Currently, Anbagam operates three centers serving over 400 residents. Demand for
              rescue and rehabilitation far exceeds available capacity. This new facility will
              allow Anbagam to serve hundreds more individuals who are currently living on the
              streets without access to care, dignity, or hope.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/new-site/donate"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-center"
            >
              Donate Online
            </Link>
            <Link
              href="/new-site/contact"
              className="flex-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-3 rounded-xl transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-1">Bank Transfer</h2>
          <p className="text-sm text-slate-500 mb-6">
            Donate directly to our registered trust account. Cheques/DDs payable to{" "}
            <span className="font-semibold text-blue-900">TERDOD</span>.
          </p>
          <div className="flex flex-col gap-4">
            {banks.map((bank, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-blue-50">
                  <span className="font-semibold text-blue-900 text-sm">{bank.label}</span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${bank.tagColor}`}>
                    {bank.tag}
                  </span>
                </div>
                <div className="px-5 py-3 divide-y divide-slate-50">
                  {bank.rows.map((row) => (
                    <div key={row.key} className="flex justify-between gap-4 py-2">
                      <span className="text-xs text-slate-400 uppercase tracking-wide flex-shrink-0 w-28">
                        {row.key}
                      </span>
                      <span className="text-sm text-blue-900 font-medium text-right">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
