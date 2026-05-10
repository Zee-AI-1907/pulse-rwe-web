import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Compliance — Kavera',
  description: 'Data governance, security posture, and procurement information for Kavera. Federated by design, GDPR Article 9, 10-year audit trail. SOC 2 and ISO 27001 in progress.',
}

export default function Trust() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900 mb-3">Trust and compliance</h1>
      <p className="text-slate-500 text-lg mb-12">How we handle data, security, and your procurement process.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Data governance</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Federated by design. Source records never leave the contributing hospital's perimeter. De-identification applied at the source under HIPAA Safe Harbor and GDPR Article 9 frameworks. k-anonymity ≥ 5 enforced at query time. Cell suppression on small counts. Differential privacy noise on aggregate outputs.</p>
          <p>Sentinel disclosure airlock reviews every artefact leaving every Trusted Research Environment for re-identification risk before release. Dual-gated review — automated check plus named human DPO co-sign — for all non-trivial outputs.</p>
          <p>Audit trail of every query, every cohort definition, every result, retained 10 years — required for FDA and EMA regulatory submissions.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Security posture</h2>
        <div className="space-y-3 text-slate-600">
          <p><span className="font-medium text-slate-900">SOC 2 Type II:</span> [CERT_PENDING — see compliance roadmap]</p>
          <p><span className="font-medium text-slate-900">ISO 27001:</span> [CERT_PENDING — see compliance roadmap]</p>
          <p><span className="font-medium text-slate-900">HITRUST:</span> [CERT_PENDING — see compliance roadmap]</p>
          <p><span className="font-medium text-slate-900">GDPR:</span> Article 9 compliant by design. Data Protection Impact Assessment (DPIA) template available on request.</p>
          <p><span className="font-medium text-slate-900">EU AI Act:</span> Sentinel disclosure airlock and Iris AI Explorer designed against the high-risk classification framework. Documentation available under NDA.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Working with us</h2>
        <div className="space-y-3 text-slate-600">
          <p>Master Service Agreement template available before first call.</p>
          <p>Data Use Agreement template available before first study.</p>
          <p>Security questionnaire response time: typically 5 business days. Send to <span className="font-medium">[compliance@kavera.health]</span> (placeholder — replace once domain is confirmed).</p>
          <p>Procurement processes we have completed: [PHARMA_REFERENCES_TBD — populate as completed]</p>
          <p>DPO contact: [DPO_CONTACT_TBD — populate when fractional DPO is engaged]</p>
        </div>
      </section>
    </div>
  );
}
