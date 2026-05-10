"use client";
import { useState } from "react";

const EXAMPLES = [
  "Mechanically ventilated patients on vasopressors with CRRT, age 45–70, cardiac ICU",
  "Post-cardiac surgery patients with atrial fibrillation, ICU stay > 5 days, 2022–2024",
  "Septic shock patients on norepinephrine with lactate > 4 mmol/L and ARDS",
];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleQuery() {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/iris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (!res.body) { setResponse("No response."); return; }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value);
        setResponse(text);
      }
    } catch {
      setResponse("Error connecting to Iris. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral">
      {/* Sticky banner — full-width, strong contrast */}
      <div className="sticky top-0 z-10 w-full bg-amber-400 text-amber-950 px-6 py-3 text-sm font-semibold text-center shadow-sm">
        ⚠️ SYNTHETIC DEMO DATA — NOT REAL PATIENTS · 10,000 simulated ICU records · No real patient data on this site
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">AI Cohort Explorer</p>
          <h2 className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-serif)" }}>Iris</h2>
          <p className="text-secondary text-sm leading-relaxed max-w-xl">
            Describe your cohort in natural language. Iris will return a synthetic feasibility estimate against 10,000 simulated ICU records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Query panel */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <label className="block text-xs font-medium uppercase tracking-widest text-secondary mb-1.5">
                Describe your cohort
              </label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows={6}
                placeholder="e.g. Mechanically ventilated patients on vasopressors with CRRT, age 45–70, cardiac ICU, admitted 2023–2024"
                title="Do not enter real patient information. This demo uses synthetic data only."
                className="w-full border border-border rounded px-3 py-2.5 text-sm text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none transition-shadow"
              />
            </div>
            <button
              onClick={handleQuery}
              disabled={loading || !query.trim()}
              className="w-full py-3 rounded font-medium text-white text-base hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              {loading ? "Iris is analysing..." : "Ask Iris"}
            </button>
            <div className="space-y-2 pt-1">
              <p className="text-xs text-muted font-medium uppercase tracking-widest">Example queries</p>
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setQuery(ex)}
                  className="block text-left text-xs text-accent hover:underline leading-relaxed"
                >
                  {ex}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted leading-relaxed border-t border-border pt-4">
              Iris returns a synthetic feasibility estimate. Real cohort results require a signed DUA.
              Do not enter real patient information in this field.
            </p>
          </div>

          {/* Response panel */}
          <div className="md:col-span-3">
            <div className="bg-surface border border-border rounded-lg p-6 min-h-80">
              {!response && !loading && (
                <p className="text-muted text-sm italic">Iris response will appear here.</p>
              )}
              {loading && !response && (
                <div className="space-y-3 animate-pulse">
                  <div className="h-3 bg-border rounded w-3/4"></div>
                  <div className="h-3 bg-border rounded w-1/2"></div>
                  <div className="h-3 bg-border rounded w-5/6"></div>
                  <div className="h-3 bg-border rounded w-2/3"></div>
                </div>
              )}
              {response && (
                <div className="text-sm text-primary leading-relaxed whitespace-pre-wrap">{response}</div>
              )}
            </div>
            {response && (
              <p className="text-xs text-muted mt-3 leading-relaxed">
                ⚠️ Synthetic demo only. Real platform results require a signed DUA and ethics committee approval.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
