export default function About() {
  const agents = [
    { name: "Iris", role: "Cohort Concierge / AI Explorer", autonomy: "Full" },
    { name: "Sentinel", role: "Disclosure Control", autonomy: "Dual-gated" },
    { name: "Mira", role: "Pharma Sales Engineer", autonomy: "Bounded" },
    { name: "Rafa", role: "Customer Success", autonomy: "Full" },
    { name: "Lin", role: "Data Steward", autonomy: "Full" },
    { name: "Kepler", role: "Regulatory Intelligence", autonomy: "Bounded" },
    { name: "Notary", role: "Audit & Compliance", autonomy: "Dual-gated" },
    { name: "Atlas", role: "Data Engineering", autonomy: "Bounded" },
    { name: "Ledger", role: "Finance", autonomy: "Bounded" },
    { name: "Hermes", role: "Communications", autonomy: "Bounded" },
    { name: "Forge", role: "Engineering Execution", autonomy: "Bounded" },
  ];

  const autonomyColor: Record<string, string> = {
    Full: "bg-emerald-100 text-emerald-700",
    Bounded: "bg-blue-100 text-blue-700",
    "Dual-gated": "bg-amber-100 text-amber-700",
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900 mb-3">About Kavera</h1>
      <p className="text-slate-500 text-lg mb-12">Three humans. Eleven agents. Designed for the 2026 operating model.</p>

      {/* What we are */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What we are</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Kavera is an AI-first operating company built on top of Ceiba's eConnect real-world data platform.
          We make de-identified longitudinal ICU and acute care data available to pharma RWE buyers
          under a strictly federated architecture — no data movement, no dataset downloads, no compromise
          on source-hospital data governance.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The operating model pushes agent autonomy further than conventional RWE vendors:
          agents run feasibility, customer success, data quality monitoring, and regulatory intelligence
          end-to-end. Named humans remain accountable at every legal, regulatory, and material commercial gate.
        </p>
      </section>

      {/* Agent roster */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">The agent roster</h2>
        <p className="text-slate-500 text-sm mb-6">Each agent carries a service identity, scoped permissions, and the same audit treatment as human users.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left px-4 py-3 font-medium">Agent</th>
                <th className="text-left px-4 py-3 font-medium">Role</th>
                <th className="text-left px-4 py-3 font-medium">Type</th>
                <th className="text-left px-4 py-3 font-medium">Autonomy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {agents.map(({ name, role, autonomy }) => (
                <tr key={name} className="bg-white hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-slate-900">{name}</td>
                  <td className="px-4 py-3 text-slate-600">{role}</td>
                  <td className="px-4 py-3"><span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded">AI agent</span></td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${autonomyColor[autonomy]}`}>{autonomy}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why AI-native */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Why AI-native</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Cost structure", desc: "6–10× lower operating cost than IQVIA-style competitors on back-office functions. Agents handle feasibility, customer success, and data monitoring end-to-end." },
            { title: "Speed", desc: "Time from signed DUA to first cohort delivery measured in days. No queue. No internal approvals for routine feasibility queries." },
            { title: "Human accountability", desc: "Autonomy is not binary. Named humans co-sign every legal, regulatory, and material commercial gate. Agents do the work; humans carry the liability." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Human team */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Named human accountability</h2>
        <div className="space-y-3">
          {[
            { role: "CEO / Founder", name: "[FOUNDER]", note: "Signatory for material contracts. Public face. Fundraising." },
            { role: "Head of Trust & Governance", name: "[HEAD_OF_TRUST_AND_GOVERNANCE]", note: "Ethics committee relationships, hospital DCAs, regulator engagement, disclosure oversight." },
            { role: "Scientific Advisory Board", name: "[SCIENTIFIC_ADVISORY_BOARD_MEMBER_1] + [SAB_MEMBER_2]", note: "Clinical KOLs in complex acute care. SAB chair signs off on study designs." },
          ].map(({ role, name, note }) => (
            <div key={role} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-lg">
              <div className="flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-widest">{role}</p>
                <p className="font-medium text-slate-900 mt-0.5">{name}</p>
                <p className="text-slate-500 text-sm mt-1">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
