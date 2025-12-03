import React from "react";
import { Rocket, ShieldCheck, BarChart3, Dna } from "lucide-react";

export default function Step6CompoundingIntelligence() {
  const milestones = [
    { label: "Baseline", icon: Dna, day: "Day 0" },
    { label: "Patterns", icon: BarChart3, day: "Day 30" },
    { label: "Precision", icon: ShieldCheck, day: "Day 90" },
    { label: "Prediction", icon: Rocket, day: "Day 180+" },
  ];

  return (
    <section className="py-24 bg-[#050814] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Step 6 · Compounding Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The longer you stay, <br />
            <span className="text-cyan-400">the smarter it gets.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Most health apps give you a snapshot. Pryima gives you a trajectory. Over months, your AI health twin becomes predictive — not just reactive.
          </p>
          
          <div className="text-xl text-white font-light italic">
            “This is what it feels like when your health finally has its own AI lab.”
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-cyan-900 to-cyan-500 rounded-full -translate-y-1/2" />
          
          <div className="grid grid-cols-4 gap-4 relative z-10">
             {milestones.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                   <div className="w-16 h-16 rounded-2xl bg-[#050814] border-2 border-gray-700 group-hover:border-cyan-400 group-hover:bg-cyan-950/30 transition-all duration-300 flex items-center justify-center mb-4 shadow-xl relative z-10">
                      <m.icon className="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                   </div>
                   <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1 opacity-70 group-hover:opacity-100">{m.day}</div>
                   <div className="text-white font-bold text-lg">{m.label}</div>
                </div>
             ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             "Anticipating glucose responses before they happen",
             "Detecting early signs of burnout or overtraining",
             "Suggesting the best times of day for your hardest work",
             "Warning you when your gut or skin microbiome may need support",
             "Adjusting for seasonal, hormonal, or lifestyle shifts",
             "Proactive alerts instead of chasing symptoms"
           ].map((feature, i) => (
             <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors">
                <p className="text-gray-300">{feature}</p>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}