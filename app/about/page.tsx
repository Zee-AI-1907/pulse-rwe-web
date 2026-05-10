import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Kavera',
  description: 'Kavera is an AI-native real-world data company. Three named human roles, eleven AI agents, built on federated architecture. Named accountability at every regulated gate.',
}

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

      {/* Hero */}
      <h1 className="text-3xl font-semibold text-slate-900 mb-3">About Kavera</h1>
      <p className="text-slate-500 text-lg mb-12">Named human accountability at every regulated gate. Agent-native operations everywhere else.</p>

      {/* Who's accountable — FIRST */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">{"Who's accountable"}</h2>
        <p className="text-slate-500 text-sm mb-6">Three named humans hold every regulated decision.</p>
        <div className="space-y-3">
          {[
            {
              role: "Chief Executive",
              name: "[Founder name and credentials TBD — populate as Afsin or successor]",
              note: "Signatory for all material contracts, public face of the company, fundraising."
            },
            {
              role: "Head of Trust and Governance",
              name: "[Name and credentials TBD]",
              note: "Owns ethics committee relationships, hospital data contribution agreements, regulator engagement, and disclosure-control oversight. The most important hire we will make this year."
            },
            {
              role: "Head of Sales",
              name: "[Name and credentials TBD]",
              note: "Closes deals, negotiates contracts above $250K, owns named pharma accounts."
            },
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
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-slate-600 text-sm">External accountability: fractional Data Protection Officer, fractional CFO, and a Scientific Advisory Board of 3–5 named clinical KOLs who chair study design review.</p>
        </div>
      </section>

      {/* What we are */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What we are</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Kavera is an AI-first operating company built on top of {"Ceiba's"} eConnect real-world data platform.
          We make de-identified longitudinal ICU and acute care data available to pharma RWE buyers
          under a strictly federated architecture — no data movement, no dataset downloads, no compromise
          on source-hospital data governance. Coverage spans US and ex-US markets across multiple regions.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Underneath the named accountability layer, agent-native operations handle feasibility, customer success,
          data quality monitoring, and regulatory intelligence. Every agent has a named human supervisor and
          the same audit treatment as a human user.
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

      {/* Why this structure */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Why this structure</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Pharma procurement and EU regulators require named, accountable humans at every legal, regulatory, and material commercial gate. We meet that bar with the three roles above and the external accountability layer.</p>
          <p>Operational throughput — feasibility analysis, customer success, data quality monitoring, regulatory intelligence — is performed by named AI agents under named human supervision. This is what lets us deliver feasibility in hours rather than weeks, and operate with a cost structure that lets us serve studies the incumbents cannot price for.</p>
          <p>Hard gates remain human. Material contract signature, regulator-facing submissions, hospital agreement negotiation, financial close, and incident command never pass through an agent without explicit human approval.</p>
        </div>
      </section>

    </div>
  );
}
