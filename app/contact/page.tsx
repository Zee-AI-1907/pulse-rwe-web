"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", role: "", email: "", description: "", therapeuticArea: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        <div className="text-emerald-500 text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">Request received</h2>
        <p className="text-slate-500">We'll be in touch within 2 business days.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900 mb-3">Request access</h1>
      <p className="text-slate-500 mb-10">Tell us about your data need. We'll respond within 2 business days.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { id: "name", label: "Name", type: "text", placeholder: "Dr. Jane Smith" },
          { id: "company", label: "Company", type: "text", placeholder: "Pharma Co." },
          { id: "role", label: "Role", type: "text", placeholder: "Head of RWE" },
          { id: "email", label: "Email", type: "email", placeholder: "jane@pharma.com" },
        ].map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
            <input
              type={type}
              required
              placeholder={placeholder}
              value={form[id as keyof typeof form]}
              onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
              className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Describe your data need</label>
          <textarea
            required
            rows={4}
            placeholder="e.g. We need a non-US comparator cohort for a cardiac safety label expansion study..."
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Therapeutic area or use case (optional)</label>
          <input
            type="text"
            placeholder="e.g. cardiogenic shock outcomes, amiodarone post-marketing, ARDS sub-phenotyping"
            value={form.therapeuticArea}
            onChange={e => setForm(f => ({ ...f, therapeuticArea: e.target.value }))}
            className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <p className="text-slate-400 text-sm">We respond within one business day. Your enquiry routes to a named human, not an inbox.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-300 text-white py-3 rounded font-medium transition-colors"
        >
          {status === "sending" ? "Sending…" : "Submit request"}
        </button>
        {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please email us directly.</p>}
      </form>
    </div>
  );
}
