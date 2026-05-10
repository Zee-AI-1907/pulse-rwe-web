import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How it works — Kavera Federated RWD Platform',
  description: 'How Kavera delivers pharma RWE without moving data. Federated TRE architecture: ICU source data stays inside the hospital perimeter. OMOP CDM, Sentinel airlock, 10-year audit trail.',
}

export default function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900 mb-3">How it works</h1>
      <p className="text-slate-500 mb-12 text-lg">Two pipelines. One principle: no raw records leave the source perimeter.</p>

      {/* Pipeline A */}
      <div className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">Pipeline A</span>
          Discovery layer
        </h2>
        <div className="flex flex-col md:flex-row gap-3 items-start">
          {[
            { n: "1", title: "eConnect source", desc: "Device, vitals, and PDMS data from ICU and acute care units. Remains inside the hospital." },
            { n: "2", title: "De-id gateway", desc: "HIPAA Safe Harbor + GDPR pseudonymisation. 18 identifiers removed. k-anonymity ≥5 enforced at query time." },
            { n: "3", title: "OMOP warehouse", desc: "OMOP CDM v5.4 lakehouse, multi-region (US + ex-US). Columnar, query-optimised." },
            { n: "4", title: "Cohort builder", desc: "Self-service UI. Define criteria, get counts. Feasibility confirmed before any study commitment." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex-1 relative">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <span className="text-emerald-500 font-bold text-xs">{n}</span>
                <h3 className="font-semibold text-slate-900 mt-1 mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
              {n !== "4" && <div className="hidden md:block absolute top-1/2 -right-2 text-slate-300 text-lg z-10">→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline B */}
      <div className="mb-14">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
          <span className="bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">Pipeline B</span>
          Analysis layer
        </h2>
        <div className="flex flex-col md:flex-row gap-3 items-start">
          {[
            { n: "1", title: "Scoped cohort", desc: "Cohort defined and confirmed via Pipeline A. Study protocol approved." },
            { n: "2", title: "TRE provisioning", desc: "Isolated compute environment provisioned inside our infrastructure. JupyterHub + RStudio. Your credentials only." },
            { n: "3", title: "Notebook environment", desc: "Run your models, train, analyse. Records stay inside the TRE. No export capability." },
            { n: "4", title: "Sentinel airlock", desc: "Every artefact reviewed for re-identification risk before release. Aggregates and model weights only." },
            { n: "5", title: "Approved output", desc: "Clean output delivered to you. Full audit trail retained 10 years." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex-1 relative">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <span className="text-slate-400 font-bold text-xs">{n}</span>
                <h3 className="font-semibold text-slate-900 mt-1 mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
              {n !== "5" && <div className="hidden md:block absolute top-1/2 -right-2 text-slate-300 text-lg z-10">→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Principle callout */}
      <div className="bg-slate-900 text-white rounded-lg px-8 py-6 mb-12">
        <h3 className="font-semibold mb-2">Core principle</h3>
        <p className="text-slate-300 leading-relaxed">
          No raw records leave the source perimeter. Every artefact passes automated disclosure control
          before release. Every query, every export, every session is logged — audit trail retained 10 years,
          required for FDA/EMA submissions.
        </p>
      </div>

      {/* Audit trail */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Audit trail</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Immutable logs", desc: "Every query, every cohort, every exported artefact. Permanent record per researcher." },
            { title: "10-year retention", desc: "Required for regulatory submissions to FDA, EMA, and MHRA. Built in, not bolted on." },
            { title: "Regulator-ready", desc: "Standardised audit trail export available on Gold tier. [CERT_PENDING — see compliance roadmap]" },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
