"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "What happens when Anbagam receives a report about a mentally ill person?",
    answer:
      "When a report is received, our team brings the individual to our center as quickly as possible. Upon arrival, they are given basic care — bathing, grooming, and a change of clothing. A medical examination is conducted, and our doctor charts a personalized rehabilitation plan. The local police are notified as required by law, and all necessary formalities are handled by the organization.",
  },
  {
    question: "Do I need to complete any paperwork to report someone?",
    answer:
      "No. You do not need to complete any paperwork to report a mentally ill person. Simply call the government helpline 14416 or KAVAL KARANGAL at 9444717100. Anbagam and the relevant authorities handle all the formalities on your behalf. Your call alone is enough to set the rescue process in motion.",
  },
  {
    question:
      "How should I respond if I encounter a mentally ill person in a public place?",
    answer:
      "Do not ignore them. Call the government helpline 14416 or KAVAL KARANGAL at 9444717100. Trained personnel will respond and ensure the individual is brought to appropriate care. You are not required to intervene physically — simply making the call is a meaningful act that can save a life.",
  },
  {
    question: "Is Anbagam a government organization?",
    answer:
      "No. Anbagam is run by the TERDOD (Trust for Education and Rehabilitation of Disabled Orphans & Destitutes), a private charitable trust founded in 1999. However, Anbagam works in partnership with government bodies including the Chennai Corporation, and is recognized as a CSR implementation agency by the IICA, Ministry of Corporate Affairs.",
  },
  {
    question: "Can I visit the centers?",
    answer:
      "Yes. Visitors, volunteers, and well-wishers are welcome. We encourage visits from students, corporate teams, and individuals interested in social service. Please contact us in advance to schedule a visit so we can ensure the best experience for you and our residents.",
  },
  {
    question: "Are donations to Anbagam / TERDOD tax-exempt?",
    answer:
      "TERDOD is a registered trust. Please contact us directly at anbagam.help@gmail.com or +91 94440 09988 for information about tax exemption certificates and receipts for your donation.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1e40 0%, #0f2b5b 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
            Help & Information
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            Answers to common questions about Anbagam, how to report cases, and how to get involved.
          </p>
        </div>
      </section>

      {/* Emergency Helpline Banner */}
      <section className="py-5 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="text-white text-sm font-medium">
              Spotted someone who needs help?
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:14416" className="text-white font-bold text-sm hover:text-blue-200 transition-colors">
              Helpline: 14416
            </a>
            <span className="text-blue-300">·</span>
            <a href="tel:9444717100" className="text-white font-bold text-sm hover:text-blue-200 transition-colors">
              KAVAL KARANGAL: 9444717100
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-blue-50 transition-colors"
                >
                  <span className="font-semibold text-blue-900 text-sm leading-relaxed">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 border-t border-blue-50 pt-4">
                    <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-10 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Still have a question?</h3>
          <p className="text-slate-600 text-sm mb-4">
            We&rsquo;re happy to help. Reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919444009988"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us
            </a>
            <a
              href="mailto:anbagam.help@gmail.com"
              className="inline-flex items-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
