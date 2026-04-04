import Link from "next/link";

const infrastructureItems = [
  {
    title: "Land Acquisition",
    description:
      "The land for Anbagam centers was acquired with the generous support of noble individuals, philanthropists, and corporate donors who believed in the mission. The process required sustained effort and community goodwill to secure suitable locations for rehabilitation care.",
  },
  {
    title: "Residential Blocks",
    description:
      "The centers are designed with separate residential blocks for men and women, ensuring appropriate care and privacy. Each block provides comfortable, well-ventilated rooms, shared facilities, and dedicated spaces for daily activities.",
  },
  {
    title: "Government Support",
    description:
      "Anbagam has received vital support from government authorities for sanctioning building plans and overseeing construction. The Chennai Corporation partnership for the Tondiarpet shelter is a key example of this collaboration.",
  },
  {
    title: "Inauguration & Operations",
    description:
      "The main Vichur facility was formally inaugurated and has been in continuous operation since 2002. Over the years, infrastructure has been upgraded and expanded to meet the growing number of residents and enhance the quality of care.",
  },
  {
    title: "Kitchen Modernization",
    description:
      "The Azim Premji Foundation supported a significant kitchen modernization initiative, upgrading the cooking and food preparation facilities to serve over 250+ residents safely, hygienically, and efficiently at scale.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Infrastructure</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            Built with community support and sustained by dedication, Anbagam&rsquo;s infrastructure
            forms the physical foundation for transforming lives.
          </p>
        </div>
      </section>

      {/* Current Infrastructure */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Current Facilities</h2>
          <div className="flex flex-col gap-4">
            {infrastructureItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Project */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 text-white"
            style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
          >
            <div className="inline-block bg-blue-500/30 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Expansion Project
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">New 300-Bed Facility</h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Anbagam is building a major new rehabilitation center to serve 300+ residents,
              addressing the growing need for mental health care in Tamil Nadu.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-300 text-xs uppercase tracking-wide mb-1">Location</p>
                <p className="text-white text-sm font-medium">Devandhavakkam, near Uthukottai</p>
                <p className="text-blue-200 text-xs">Thiruvallur District, Tamil Nadu</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-300 text-xs uppercase tracking-wide mb-1">Land Area</p>
                <p className="text-white text-sm font-medium">15 Acres</p>
                <p className="text-blue-200 text-xs">With 5-acre perimeter fencing</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-300 text-xs uppercase tracking-wide mb-1">Building</p>
                <p className="text-white text-sm font-medium">12,000 sq ft</p>
                <p className="text-blue-200 text-xs">Purpose-built rehabilitation facility</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-blue-300 text-xs uppercase tracking-wide mb-1">Capacity</p>
                <p className="text-white text-sm font-medium">300+ Residents</p>
                <p className="text-blue-200 text-xs">Men and women</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <p className="text-blue-300 text-xs uppercase tracking-wide mb-1">Funding Goal</p>
              <p className="text-white text-2xl font-bold">Rs 3 Crores</p>
              <p className="text-blue-200 text-sm mt-1">
                K.R. Baliga family has donated Rs 1 crore+. Fundraising continues.
              </p>
            </div>

            <Link
              href="/new-site/appeal"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              View the Appeal
            </Link>
          </div>
        </div>
      </section>

      {/* Centers overview */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-5">Current Centers</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Vichur (Thirunilai)", desc: "Main center, Vichur Post, Chennai – 600 103", href: "/new-site/vichur" },
              { name: "Tondiarpet (CDH)", desc: "Chennai Corporation facility, T.H. Road, Chennai – 600 081", href: "/new-site/contact" },
              { name: "Otteri", desc: "Women's shelter, Nammalwarpet, Chennai – 600 012", href: "/new-site/contact" },
            ].map((center) => (
              <Link
                key={center.name}
                href={center.href}
                className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-900 text-sm mb-1">{center.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{center.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
