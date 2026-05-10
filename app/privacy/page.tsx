export const metadata = { title: "Privacy Notice — Kavera" };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-serif)" }}>{title}</h2>
    <div className="text-secondary text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <p className="text-xs text-muted uppercase tracking-widest mb-4">Legal</p>
      <h1 className="text-4xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-serif)" }}>Privacy Notice</h1>
      <p className="text-secondary text-sm mb-12">Last updated: 10 May 2026. This notice covers the Project Pulse demo and marketing website only — not any production data platform.</p>

      <Section title="Who we are">
        <p>Kavera [WORKING NAME] (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data controller for personal data collected through this website. We are in the process of formal incorporation. For data enquiries, contact: [CONTACT_EMAIL_TBD].</p>
        <p>This site is a demonstration and marketing environment. No real patient data is processed here. No production health data platform is accessible from this site.</p>
      </Section>

      <Section title="What we collect and why">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-neutral">
                <th className="text-left px-3 py-2 border border-border text-secondary uppercase tracking-wide">Data</th>
                <th className="text-left px-3 py-2 border border-border text-secondary uppercase tracking-wide">Purpose</th>
                <th className="text-left px-3 py-2 border border-border text-secondary uppercase tracking-wide">Lawful basis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Name, company, email, role, message (contact form)", "Responding to access requests and enquiries", "Legitimate interest (pre-contractual)"],
                ["Email address (demo gate)", "Controlling access to the synthetic data demo", "Legitimate interest (service delivery)"],
                ["Free-text demo queries (Iris)", "Generating synthetic cohort responses via AI", "Legitimate interest (service delivery)"],
                ["Demo session cookie", "Maintaining your demo session for 24 hours", "Strictly necessary"],
              ].map(([d, p, b]) => (
                <tr key={d}>
                  <td className="px-3 py-2 border border-border text-primary">{d}</td>
                  <td className="px-3 py-2 border border-border">{p}</td>
                  <td className="px-3 py-2 border border-border">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Who we share data with">
        <p><strong className="text-primary">Telegram</strong> — Contact form submissions are delivered to our internal team via Telegram. Telegram acts as a data processor under our instructions. Data is not used by Telegram for any other purpose.</p>
        <p><strong className="text-primary">Anthropic</strong> — Free-text queries submitted in the Iris demo are processed by Anthropic&rsquo;s API (claude-haiku model) to generate synthetic responses. Anthropic acts as a data processor. Please do not submit real patient information or personal data in the demo query field. Anthropic&rsquo;s privacy policy applies to their processing: anthropic.com/privacy.</p>
        <p>We do not sell personal data. We do not share personal data with third parties for their own marketing purposes.</p>
      </Section>

      <Section title="How long we keep data">
        <p>Contact form submissions are retained for 12 months from receipt. If no commercial relationship develops, data is deleted at the 12-month review.</p>
        <p>Demo session cookies expire after 24 hours. No email addresses from the demo gate are stored in any database — they are used only to set the session cookie.</p>
      </Section>

      <Section title="Your rights">
        <p>Under UK GDPR, you have the right to: access your data, correct inaccuracies, request erasure, object to processing, and lodge a complaint with the ICO (ico.org.uk).</p>
        <p>To exercise any right, contact us at: [CONTACT_EMAIL_TBD]. We will respond within one month.</p>
      </Section>

      <Section title="Cookies">
        <p>This site sets one cookie: <span className="font-mono text-primary">demo_session</span> — a strictly necessary functional cookie that controls access to the synthetic data demo. It expires after 24 hours. No tracking cookies, no analytics cookies, no third-party advertising cookies are used.</p>
      </Section>

      <Section title="Changes to this notice">
        <p>We will update this notice as the platform develops. Material changes will be reflected in the &ldquo;Last updated&rdquo; date above.</p>
      </Section>

      <div className="border-t border-border pt-8 text-xs text-muted">
        <p>[CERT_PENDING — see compliance roadmap] · This notice has been reviewed by DPO-Ops (operational AI agent) and is pending review by the named Data Protection Officer before external publication.</p>
      </div>
    </div>
  );
}
