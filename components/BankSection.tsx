// components/BankSection.tsx
export function BankSection() {
  const banks = [
    {
      label: "Indian Overseas Bank",
      tag: "Domestic",
      tagColor: "bg-blue-100 text-blue-700",
      rows: [
        { key: "Account Name", value: "TERDOD" },
        { key: "Account No.", value: "008602000008527" },
        { key: "Branch",      value: "Sowcarpet, Chennai 600079" },
        { key: "IFSC",        value: "IOBA0000086" },
      ],
    },
    {
      label: "State Bank of India",
      tag: "Domestic",
      tagColor: "bg-blue-100 text-blue-700",
      rows: [
        { key: "Account Name", value: "TERDOD" },
        { key: "Account No.", value: "40221237952" },
        { key: "Branch",      value: "Edayanchavadi" },
        { key: "IFSC",        value: "SBIN0007595" },
      ],
    },
    {
      label: "State Bank of India",
      tag: "International (FCRA)",
      tagColor: "bg-teal-100 text-teal-700",
      rows: [
        { key: "Account Name", value: "Trust for Education and Rehabilitation of Disabled Orphans & Destitutes" },
        { key: "Account No.", value: "00000040145846960" },
        { key: "Branch",      value: "New Delhi Main Branch" },
        { key: "IFSC",        value: "SBIN0000691" },
        { key: "SWIFT",       value: "SBININBB104" },
        { key: "FCRA No.",    value: "075900916" },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-blue-900 mb-1">Bank Transfer</h3>
        <p className="text-sm text-slate-500 mb-6">
          Donate directly to our registered trust account.
        </p>

        <div className="flex flex-col gap-4">
          {banks.map((bank, i) => (
            <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-blue-50">
                <span className="font-semibold text-blue-900 text-sm">{bank.label}</span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${bank.tagColor}`}>
                  {bank.tag}
                </span>
              </div>
              {/* Rows */}
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
  );
}
