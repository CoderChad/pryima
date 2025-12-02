import React from "react";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function ModelUpdates() {
  const updates = [
    { month: "Month 1", label: "Baseline Established", metric: "Metabolic Type Identified" },
    { month: "Month 3", label: "Pattern Recognition", metric: "Glucose Variability ↓ 12%" },
    { month: "Month 6", label: "Model Optimization", metric: "Recovery Score ↑ 15%" },
    { month: "Month 12", label: "Longitudinal Profile", metric: "Biological Age < Chronological" },
  ];

  return (
    <section className="py-24 bg-[#050814] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-6">
              <RefreshCw size={12} className="animate-spin-slow" />
              <span>SYSTEM UPDATING</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Learning You <br/>
              <span className="text-[#FF4A00]">Over Time</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Pryima isn't a static report. It's an evolving OS. As you feed it new labs, meals, and sleep data, your biological model updates—refining its recommendations to be more effective for <em>you</em>.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {updates.map((update, i) => (
                <div key={i} className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  {i < updates.length - 1 && (
                    <div className="absolute top-1/2 -right-6 z-10 hidden md:block text-gray-600">
                      <ArrowRight size={16} />
                    </div>
                  )}
                  <div className="text-xs font-mono text-gray-500 mb-2">{update.month}</div>
                  <div className="text-white font-semibold mb-2">{update.label}</div>
                  <div className="text-xs px-2 py-1 rounded bg-[#FF4A00]/10 text-[#FF4A00] inline-block border border-[#FF4A00]/20">
                    {update.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}