const milestones = [
  {
    year: "1999",
    title: "The Beginning",
    description:
      "Mohammed Rafi, moved by the plight of mentally ill individuals abandoned on the streets, began offering shelter from his own residence. With no institutional backing, he personally rescued individuals and provided them food, clothing, and medical attention. He established the TERDOD (Trust for Education and Rehabilitation of Disabled Orphans & Destitutes) trust to formalize the vision.",
  },
  {
    year: "2001",
    title: "Growing the Team",
    description:
      "C.V. Vinod, a senior officer with BSNL, joined the cause and became Managing Trustee — bringing organizational strength and commitment that continues to this day.",
  },
  {
    year: "2002",
    title: "First Permanent Facility",
    description:
      "Anbagam acquired its first permanent facility — land and building in Thirunilai Village near Red Hills, Chennai (Vichur Post). This became the main rehabilitation center for men, providing structured care, meals, and medical supervision in a safe environment.",
  },
  {
    year: "2004–2005",
    title: "Expanding the Board",
    description:
      "Several dedicated individuals from diverse backgrounds joined the TERDOD board — including retired government officers, legal professionals, and community leaders — strengthening the governance and operational capacity of Anbagam.",
  },
  {
    year: "2013",
    title: "City Partnership — Tondiarpet",
    description:
      "Anbagam partnered with the Chennai Corporation to operate a shelter at the Center for Communicable Diseases, Tondiarpet (No. 187, T.H. Road, Chennai – 600 081). This extended care to more residents within the city.",
  },
  {
    year: "2015",
    title: "Women's Shelter — Otteri",
    description:
      "Recognizing the acute need for women's rehabilitation, Anbagam opened a dedicated women's shelter in Otteri, Chennai (No. 5, Subbarayan Main Street, Nammalwarpet — opposite GOVT Polytechnic College). This was a landmark step in expanding care to women rescued from the streets.",
  },
  {
    year: "2017",
    title: "Medical Expertise Added",
    description:
      "Dr. Jayakumar Menon, a psychiatrist, joined the board of trustees, bringing specialized medical knowledge to guide resident care protocols.",
  },
  {
    year: "2023–2024",
    title: "Modernization & Expansion",
    description:
      "With nearly 400 residents across three centers, Anbagam undertook a major kitchen modernization project supported by the Azim Premji Foundation. Plans for a new 300-bed facility were initiated on 15 acres at Devandhavakkam, near Uthukottai, Thiruvallur District.",
  },
  {
    year: "2025",
    title: "A New Chapter",
    description:
      "The K.R. Baliga family made a landmark donation of Rs 1 crore+ toward the new facility. Fundraising continues with a goal of Rs 3 crores to complete the 12,000 sq ft building with 5-acre perimeter fencing — a future home for 300+ residents.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            About Anbagam
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            A journey that began with one man&rsquo;s compassion and grew into a movement of care,
            dignity, and hope for hundreds of lives.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-10 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white text-lg italic font-medium">
            &ldquo;Individually, we are one drop. Together, we are an ocean.&rdquo;
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Milestones</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden sm:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs text-center leading-tight z-10 relative">
                      {milestone.year}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-blue-100 shadow-sm p-5 pb-5">
                    <h3 className="text-base font-bold text-blue-900 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">The Founder&rsquo;s Vision</h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Mohammed Rafi saw mentally ill individuals abandoned by society — on roadsides, under
              bridges, in markets — and instead of walking past, he acted. Starting with no facility,
              no funding, and no formal support, he opened his own home to the most vulnerable.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              His belief was simple: that every human being, regardless of their mental state or
              social standing, deserves to be treated with dignity and compassion. That belief
              became the foundation of Anbagam.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Today, Anbagam serves over 400 residents and is recognized as a CSR implementation
              agency by the IICA, Ministry of Corporate Affairs — a testament to the enduring power
              of that original act of compassion.
            </p>
            <div className="mt-5 pt-5 border-t border-blue-50">
              <p className="text-blue-700 font-semibold text-sm">M.P. Mohammed Rafi</p>
              <p className="text-blue-400 text-xs">Founder & Trustee, Anbagam / TERDOD</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
