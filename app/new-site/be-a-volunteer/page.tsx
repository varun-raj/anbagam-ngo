import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const whoCanVolunteer = [
  {
    title: "Students",
    description:
      "Students from schools, colleges, and universities can earn social service hours while making a genuine difference in the lives of residents.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Corporate Employees & Teams",
    description:
      "Companies and teams can participate in CSR volunteering visits. Anbagam is recognized as a CSR implementation agency by IICA, Ministry of Corporate Affairs.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Foreigners & International Visitors",
    description:
      "Individuals from abroad who are interested in social service and cross-cultural engagement are warmly welcome to visit and volunteer.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Anyone with a Compassionate Heart",
    description:
      "No formal qualifications needed. If you have time, empathy, and a desire to make someone\u2019s day a little brighter, you belong here.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const activities = [
  "Spend quality time with residents — conversations, listening, companionship",
  "Share entertainment: music, storytelling, or group activities",
  "Engage in recreational activities together in the courtyard or gardens",
  "Help with vocational training initiatives",
  "Participate in community events and celebrations",
  "Assist with practical tasks as needed (with staff guidance)",
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Get Involved
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Be a Volunteer</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            A few hours of your time can provide a spark of enthusiasm in the lives of our residents —
            individuals who rarely receive visitors or the warmth of a conversation.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-10 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white text-lg italic font-medium">
            &ldquo;Provide a spark of enthusiasm in their lives.&rdquo;
          </p>
          <p className="text-blue-200 text-sm mt-2">— Anbagam&rsquo;s call to volunteers</p>
        </div>
      </section>

      {/* Who can volunteer */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Who Can Volunteer?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whoCanVolunteer.map((type, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  {type.icon}
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{type.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll do */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">What You&rsquo;ll Do</h2>
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6">
            <p className="text-slate-700 text-sm leading-relaxed mb-5">
              Many of our residents have been away from society for years. A volunteer visit means
              the world to them — a familiar face, a kind word, a game, a song, or simply someone
              who listens. You don&rsquo;t need special skills. You just need to show up with an open heart.
            </p>
            <ul className="flex flex-col gap-2.5">
              {activities.map((activity, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-slate-700">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">How to Get Started</h2>
          <div
            className="rounded-xl p-6 sm:p-8 text-white mb-6"
            style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
          >
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Getting started is simple. Just reach out to us via phone, WhatsApp, or email.
              We&rsquo;ll help you choose the right center, time, and activity based on your availability
              and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919444009988"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call +91 94440 09988
              </a>
              <a
                href="https://wa.me/919444009988"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600/80 hover:bg-green-600 text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="mailto:anbagam.help@gmail.com"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">CSR Volunteering</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Anbagam is a recognized CSR implementation agency under the IICA, Ministry of Corporate
              Affairs. Companies can partner with us for structured CSR volunteering programs. Contact
              us to discuss how your organization can make an impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
