"use client";
// components/BankSection.tsx
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex-shrink-0"
      aria-label={`Copy ${text}`}
    >
      {copied ? (
        <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
        </svg>
      )}
    </button>
  );
}

function BankCard({
  label,
  tag,
  tagColor,
  rows,
}: {
  label: string;
  tag: string;
  tagColor: string;
  rows: { key: string; value: string; copyable?: boolean; mono?: boolean }[];
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="px-5 py-4 border-b border-blue-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
            <svg className="w-4.5 h-4.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
          </div>
          <span className="font-semibold text-blue-900 text-sm">{label}</span>
        </div>
        <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${tagColor}`}>
          {tag}
        </span>
      </div>

      {/* Rows */}
      <div className="px-5 py-2">
        {rows.map((row, i) => (
          <div
            key={row.key}
            className={`flex items-start justify-between gap-4 py-3 ${
              i !== rows.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <span className="text-[11px] text-slate-400 uppercase tracking-wider pt-0.5 flex-shrink-0 min-w-[5.5rem]">
              {row.key}
            </span>
            <span
              className={`text-sm text-blue-900 font-medium text-right flex items-center ${
                row.mono ? "font-mono tracking-wide" : ""
              }`}
            >
              {row.value}
              {row.copyable && <CopyButton text={row.value} />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BankSection() {
  const domesticBanks = [
    {
      label: "Indian Overseas Bank",
      tag: "Domestic",
      tagColor: "bg-blue-50 text-blue-600",
      rows: [
        { key: "Account", value: "TERDOD" },
        { key: "A/C No.", value: "008602000008527", copyable: true, mono: true },
        { key: "Branch", value: "Sowcarpet, Chennai 600079" },
        { key: "IFSC", value: "IOBA0000086", copyable: true, mono: true },
      ],
    },
    {
      label: "State Bank of India",
      tag: "Domestic",
      tagColor: "bg-blue-50 text-blue-600",
      rows: [
        { key: "Account", value: "TERDOD" },
        { key: "A/C No.", value: "40221237952", copyable: true, mono: true },
        { key: "Branch", value: "Edayanchavadi" },
        { key: "IFSC", value: "SBIN0007595", copyable: true, mono: true },
      ],
    },
  ];

  const fcraBanks = [
    {
      label: "State Bank of India",
      tag: "International · FCRA",
      tagColor: "bg-teal-50 text-teal-600",
      rows: [
        { key: "Account", value: "Trust for Education and Rehabilitation of Disabled Orphans & Destitutes" },
        { key: "A/C No.", value: "00000040145846960", copyable: true, mono: true },
        { key: "Branch", value: "New Delhi Main Branch" },
        { key: "IFSC", value: "SBIN0000691", copyable: true, mono: true },
        { key: "SWIFT", value: "SBININBB104", copyable: true, mono: true },
        { key: "FCRA No.", value: "075900916", copyable: true, mono: true },
      ],
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900">Bank Transfer</h3>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Donate directly to our registered trust accounts. Tap account numbers or IFSC codes to copy.
          </p>
        </div>

        {/* Domestic — 2-up on desktop */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {domesticBanks.map((bank, i) => (
            <BankCard key={i} {...bank} />
          ))}
        </div>

        {/* FCRA — full width */}
        {fcraBanks.map((bank, i) => (
          <BankCard key={i} {...bank} />
        ))}

        {/* Footer note */}
        <p className="text-[11px] text-slate-400 mt-6 text-center">
          All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
        </p>
      </div>
    </section>
  );
}
