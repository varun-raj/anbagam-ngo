"use client";

import { useState } from "react";

const UPI_ID = "mpmohamedrafi617317.rzp@rxairtel";

const impactTiers = [
  {
    amount: "Rs 1,000",
    impact: "Individual care and treatment",
    description: "Covers personal care, grooming, and individual treatment support for one resident.",
  },
  {
    amount: "Rs 1,500",
    impact: "Medicines",
    description: "Funds medication for one resident — administered 1–3 times daily as prescribed.",
  },
  {
    amount: "Rs 3,500",
    impact: "Full-day care for one person",
    description:
      "Comprehensive one-day care for a single resident: meals, medication, personal care, and support.",
    highlight: true,
  },
  {
    amount: "Rs 21,000",
    impact: "Meals for all 250+ residents",
    description: "Sponsors a full day of nutritious meals for every resident across Anbagam centers.",
  },
];

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

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  function copyUPI() {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
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
            Make a Difference
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Support Anbagam</h1>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl mx-auto">
            Your donation directly funds the rescue, care, and rehabilitation of mentally ill
            individuals. Every rupee counts — and every person counts.
          </p>
        </div>
      </section>

      {/* UPI Section */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Pay via UPI</h2>
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* QR placeholder */}
              <div className="flex-shrink-0 w-36 h-36 bg-slate-100 rounded-xl border-2 border-blue-100 flex flex-col items-center justify-center text-center p-3">
                <svg className="w-10 h-10 text-blue-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                </svg>
                <p className="text-xs text-slate-400 leading-tight">Scan QR to pay</p>
              </div>

              {/* UPI details */}
              <div className="flex-1 w-full">
                <p className="text-sm text-slate-500 mb-2">UPI ID</p>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 mb-4">
                  <span className="flex-1 text-blue-900 font-mono text-sm font-medium break-all">
                    {UPI_ID}
                  </span>
                  <button
                    onClick={copyUPI}
                    className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                  >
                    {copied ? (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`upi://pay?pa=${UPI_ID}&pn=TERDOD+Anbagam&cu=INR`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Open in UPI App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Tiers */}
      <section className="py-12 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Your Impact</h2>
          <p className="text-slate-500 text-sm mb-6">See how your contribution directly helps our residents.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {impactTiers.map((tier) => (
              <div
                key={tier.amount}
                className={`rounded-xl border shadow-sm p-5 ${
                  tier.highlight
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-white border-blue-100"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block bg-white/20 text-white text-xs px-2 py-0.5 rounded-full mb-3 font-medium">
                    Most Impactful
                  </span>
                )}
                <p
                  className={`text-2xl font-bold mb-1 ${
                    tier.highlight ? "text-white" : "text-blue-900"
                  }`}
                >
                  {tier.amount}
                </p>
                <p
                  className={`font-semibold text-sm mb-2 ${
                    tier.highlight ? "text-blue-100" : "text-blue-700"
                  }`}
                >
                  {tier.impact}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    tier.highlight ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="py-12 px-4 sm:px-6 bg-white">
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
