import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const founder = {
  name: "M.P. Mohammed Rafi",
  role: "Founder & Trustee",
  detail: "Businessman",
  since: "1999",
  bio: "Founded Anbagam from his own home in 1999, driven by compassion for mentally ill individuals abandoned on the streets. Established the TERDOD trust to formalize the mission of rescue, care, and rehabilitation.",
};

const managingTrustee = {
  name: "C.V. Vinod",
  role: "Managing Trustee",
  detail: "Retired Chief General Manager, BSNL",
  since: "2001",
  bio: "Joined the cause in 2001 and has served as Managing Trustee ever since, bringing leadership, operational expertise, and unwavering commitment to the organization.",
};

const boardMembers = [
  {
    name: "P. Subba Reddy",
    role: "High Court Advocate",
    detail: "Chennai",
    since: "2005",
  },
  {
    name: "E. Charumathi",
    role: "Retired Indian Railways Reservation Officer",
    detail: "",
    since: "2004",
  },
  {
    name: "Mrs. Karthika Devi Sasidharan",
    role: "Retired College Educator",
    detail: "",
    since: "",
  },
  {
    name: "E.A. Wilson",
    role: "Retired Southern Railways Officer",
    detail: "",
    since: "2004",
  },
  {
    name: "Dr. Jayakumar Menon",
    role: "Psychiatrist",
    detail: "",
    since: "2017",
  },
  {
    name: "Sanjeev Jain. S",
    role: "Businessman",
    detail: "Sowcarpet, Chennai",
    since: "2010",
  },
  {
    name: "Thyagu Durai Kannan Rathinadurai",
    role: "IT Manager",
    detail: "Chennai",
    since: "2014",
  },
  {
    name: "Vinod Kumar G",
    role: "Businessman",
    detail: "Chennai",
    since: "2015",
  },
  {
    name: "M. Surendran",
    role: "Retired Railways / Chennai Metro",
    detail: "Chennai",
    since: "2017",
  },
];

export default function TrusteesPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Trustees</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            Anbagam is guided by a dedicated board of trustees from diverse professional backgrounds,
            all united by a shared commitment to the welfare of the most vulnerable.
          </p>
        </div>
      </section>

      {/* Founder & Managing Trustee */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Leadership</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[founder, managingTrustee].map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl border-2 border-blue-500 shadow-md p-6"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-blue-900 mb-0.5">{person.name}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-0.5">{person.role}</p>
                {person.detail && (
                  <p className="text-slate-500 text-xs mb-3">{person.detail}</p>
                )}
                {person.since && (
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2.5 py-0.5 rounded-full mb-3">
                    With Anbagam since {person.since}
                  </span>
                )}
                <p className="text-slate-600 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>

          {/* Board Members */}
          <h2 className="text-xl font-bold text-blue-900 mb-6">Board Members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-blue-100 shadow-sm p-5"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-blue-900 mb-0.5 leading-snug">{member.name}</h3>
                <p className="text-blue-600 text-xs font-medium mb-0.5">{member.role}</p>
                {member.detail && (
                  <p className="text-slate-400 text-xs">{member.detail}</p>
                )}
                {member.since && (
                  <span className="inline-block mt-2 bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">
                    Since {member.since}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values note */}
      <section className="py-10 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-900 text-base italic">
            &ldquo;Our board members bring decades of experience from law, medicine, railways,
            telecommunications, business, and education — all coming together in service of one cause.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
