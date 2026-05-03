"use client";

import { DonationForm } from "@/components/DonationForm";


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

      {/* Donation Section */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Donate Online</h2>
            <p className="text-slate-500">Support our mission with a secure online payment.</p>
          </div>
          <DonationForm />
        </div>
      </section>

      {/* Impact Tiers */}
...

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
