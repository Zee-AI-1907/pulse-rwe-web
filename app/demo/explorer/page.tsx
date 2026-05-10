"use client";
import { useState, useRef } from "react";

export default function DemoExplorer() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "iris"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleAsk = async () => {
    if (!query.trim() || loading) return;
    const q = query.trim();
    setQuery("");
    setMessages(m => [...m, { role: "user", text: q }]);
    setLoading(true);
    try {
      const res = await fetch("/api/iris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "iris", text: data.response || data.error || "No response." }]);
    } catch {
      setMessages(m => [...m, { role: "iris", text: "Error connecting to Iris. Please try again." }]);
    }
    setLoading(false);
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col" style={{ minHeight: "calc(100vh - 56px - 100px)" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Iris — Cohort Explorer</h1>
          <p className="text-slate-500 text-sm">Ask a feasibility question in plain language</p>
        </div>
        <div className="bg-amber-100 border border-amber-300 rounded px-3 py-1.5 text-right">
          <p className="text-amber-800 text-xs font-bold">⚠️ SYNTHETIC DEMO DATA</p>
          <p className="text-amber-700 text-xs">NOT REAL PATIENTS</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-white rounded-lg overflow-y-auto p-6 mb-4 space-y-4" style={{ minHeight: "400px", border: "1px solid rgba(16,185,129,0.4)", boxShadow: "0 0 0 1px rgba(16,185,129,0.15), 0 0 24px rgba(16,185,129,0.12), 0 4px 24px rgba(0,0,0,0.06)" }}>
        {messages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm mb-4">Ask Iris a feasibility question to get started.</p>
            <div className="space-y-2">
              {[
                "How many CHF patients on amiodarone with invasive monitoring between 2022–2025?",
                "What is the sepsis mortality rate in ventilated patients across all sites?",
                "How many peri-operative cardiac surgery patients have continuous arterial line data?",
              ].map(ex => (
                <button
                  key={ex}
                  onClick={() => setQuery(ex)}
                  className="block w-full text-left text-xs text-slate-500 hover:text-slate-900 border border-slate-100 hover:border-slate-300 rounded px-4 py-2 transition-colors"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-2xl rounded-lg px-4 py-3 text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-slate-900 text-white"
                : "bg-slate-50 border border-slate-200 text-slate-700"
            }`}>
              {msg.role === "iris" && (
                <p className="text-xs text-emerald-600 font-medium mb-1">Iris</p>
              )}
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
              <p className="text-xs text-emerald-600 font-medium mb-1">Iris</p>
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
        {/* Conversion CTA */}
  {messages.length > 0 && (
    <div className="border-t border-slate-200 pt-6">
      <h2 className="text-base font-semibold text-slate-900">Want to run this query against the real cohort?</h2>
      <p className="text-slate-500 text-sm">The synthetic demo shows you the experience. The real cohort runs against 1.2M+ acute care records under our federated architecture. A 20-minute call gives you a feasibility estimate for your actual study question.</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a href="[CALENDAR_URL_TBD]" className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded font-medium text-sm text-center">Book a feasibility call →</a>
        <a href="/contact?context=demo" className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-4 py-2.5 rounded font-medium text-sm text-center">Or send us your question →</a>
      </div>
    </div>
  )}
  </div>

  {/* Input */}
      <div className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAsk()}
          placeholder="e.g. How many ICU patients with ARDS and prone positioning in 2023?"
          className="flex-1 rounded px-4 py-2.5 text-sm focus:outline-none"
          style={{ border: "1px solid rgba(16,185,129,0.5)", boxShadow: "0 0 0 1px rgba(16,185,129,0.2), 0 0 16px rgba(16,185,129,0.15)" }}
          disabled={loading}
        />
        <button
          onClick={handleAsk}
          disabled={loading || !query.trim()}
          className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-200 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
        >
          Ask Iris
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-slate-400 text-xs mt-3 text-center">
        ⚠️ SYNTHETIC DEMO DATA — NOT REAL PATIENTS. Results are illustrative only.{" "}
        <a href="/contact" className="text-emerald-600 hover:underline">Contact us</a> for a feasibility study against our real federated dataset.
      </p>
    </div>
  );
}
