"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Demo() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/demo-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    router.push("/demo/explorer");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-3 mb-8">
          <p className="text-amber-800 text-sm font-medium">⚠️ SYNTHETIC DEMO DATA — NOT REAL PATIENTS</p>
          <p className="text-amber-700 text-xs mt-1">This demo uses ~10,000 dummy patients. Results are illustrative only.</p>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Try the Iris demo</h1>
        <p className="text-slate-500 mb-8 text-sm">
          Enter your work email to access the synthetic cohort browser. Iris will respond to natural-language
          feasibility queries against a dummy OMOP dataset.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="you@pharma.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-300 text-white py-3 rounded font-medium transition-colors"
          >
            {loading ? "Loading…" : "Access demo →"}
          </button>
        </form>
        <p className="text-slate-400 text-xs mt-4 text-center">No account required. No marketing emails.</p>
      </div>
    </div>
  );
}
