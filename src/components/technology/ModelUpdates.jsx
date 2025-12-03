import React from "react";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function ModelUpdates() {
  const updates = [
    { 
      month: "MONTH 1", 
      label: "Baseline Established", 
      metric: "Metabolic Type Identified",
      color: "text-[#FF8C42]"
    },
    { 
      month: "MONTH 3", 
      label: "Pattern Recognition", 
      metric: "Glucose Variability ↓ 12%",
      color: "text-[#FF4A00]"
    },
    { 
      month: "MONTH 12", 
      label: "Longitudinal Profile", 
      metric: "Biological Age < Chronological",
      color: "text-[#FF8C42]"
    },
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Learning You <br/>
              <span className="text-[#FF4A00]">Over Time</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Pryima isn't a static report. It's an evolving OS. As you feed it new labs, meals, and sleep data, your biological model updates—refining its recommendations to be more effective for <em className="text-white not-italic">you</em>.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {updates.map((update, i) => (
                <div key={i} className="relative flex items-center">
                  <div className="w-full p-6 rounded-2xl bg-[#0A0F1E] border border-white/10 hover:border-[#FF4A00]/30 transition-colors group">
                    <div className="text-xs font-mono text-gray-500 mb-4 tracking-widest uppercase bg-[#151a2d] inline-block px-2 py-1 rounded">{update.month}</div>
                    <div className="text-white font-bold text-xl mb-4">{update.label}</div>
                    <div className={`text-sm p-3 rounded-lg bg-[#FF4A00]/10 ${update.color} border border-[#FF4A00]/20 font-medium`}>
                      {update.metric}
                    </div>
                  </div>
                  
                  {i < updates.length - 1 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block text-gray-600">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}