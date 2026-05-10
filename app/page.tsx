"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">Real-World Evidence Platform</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Longitudinal ICU and device data.<br />Federated. Query-ready.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Cohort feasibility in hours, not weeks. Complex acute care data from
            continuous device and waveform streams — the asset class EHR-only vendors
            structurally cannot replicate.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded font-medium transition-colors">
              Request access
            </Link>
            <Link href="/demo" className="border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white px-6 py-3 rounded font-medium transition-colors">
              Try the demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The problem</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-4">
            Pharma RWE teams spend 6–9 weeks getting a feasibility answer that should take hours.
            The bottleneck is not data — it is access architecture. Most vendors sell dataset
            licences that trigger legal, privacy, and procurement delays before a single cohort
            is scoped.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            The data that matters most for acute care studies — continuous device data, waveform
            data, ICU-level PDMS records — has never been systematically licensed for RWE use.
            Until now.
          </p>
        </div>
      </section>

      {/* Wedge */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">What EHR vendors cannot replicate</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-medium">Data dimension</th>
                  <th className="text-left px-4 py-3 font-medium">EHR-only vendors</th>
                  <th className="text-left px-4 py-3 font-medium text-emerald-300">Kavera</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Data class", "EHR snapshots", "Continuous device + waveform + PDMS"],
                  ["Temporal resolution", "15-min or daily", "Minute-level"],
                  ["Clinical setting", "Outpatient, ambulatory", "ICU, peri-op, cardiac, neuro"],
                  ["Geography", "US-centric", "US + ex-US markets (EMEA, Middle East)"],
                  ["Architecture", "Dataset licence", "Federated — no data movement"],
                ].map(([dim, ehr, dc]) => (
                  <tr key={dim} className="bg-white hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">{dim}</td>
                    <td className="px-4 py-3 text-slate-500">{ehr}</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium">{dc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-xs mt-3">
            Comparison based on publicly available vendor positioning. No representations made about competitors' current product capabilities.
          </p>
        </div>
      </section>

      {/* Federated Model */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">How the federated model works</h2>
          <p className="text-slate-500 mb-10">No underlying data movement. Your analysis runs inside our infrastructure.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "eConnect source", desc: "Clinical data from ICU, PDMS, and device streams at source hospitals. Stays inside the hospital perimeter." },
              { step: "02", title: "De-id gateway", desc: "De-identification applied at the Ceiba edge. 18 identifiers removed, k-anonymity ≥5 enforced. No raw PHI crosses the perimeter." },
              { step: "03", title: "Discovery warehouse", desc: "OMOP CDM v5.4 lakehouse. You query cohort counts and feasibility. Records never leave the federated layer." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase">{step}</span>
                <h3 className="text-slate-900 font-semibold mt-2 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg px-6 py-4">
            <p className="text-emerald-800 text-sm font-medium">
              For record-level analysis: a Trusted Research Environment is provisioned inside our infrastructure.
              You log in, run your analysis. No raw records leave. All outputs pass disclosure control before release.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Access tiers</h2>
          <p className="text-slate-400 mb-10 text-sm">All prices indicative. Final terms subject to contract.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tier: "Bronze", price: "$40–80K / yr", desc: "Self-service feasibility queries. Cohort sizing. No record-level access.", cta: false },
              { tier: "Silver", price: "$150–250K / yr", desc: "Unlimited feasibility + 2 Trusted Research Environments per year for record-level analysis.", cta: false },
              { tier: "Gold", price: "$400K–1M+ / yr", desc: "Silver + AI Explorer seats, regulatory-grade study packages, dedicated CSM, custom data partners.", cta: true },
            ].map(({ tier, price, desc, cta }) => (
              <div key={tier} className={`rounded-lg p-6 border ${cta ? "bg-emerald-900 border-emerald-700" : "bg-slate-800 border-slate-700"}`}>
                <h3 className="font-semibold text-lg mb-1">{tier}</h3>
                <p className={`text-sm font-medium mb-3 ${cta ? "text-emerald-300" : "text-slate-400"}`}>{price}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-8">
            Also available: per-study packages ($25–300K) and AI Explorer named-user add-on ($3–8K / user / month).
          </p>
          <div className="mt-8">
            <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded font-medium transition-colors inline-block">
              Request access →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
