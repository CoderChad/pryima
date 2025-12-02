import React from "react";
import { TrendingUp, Zap, ShieldCheck, LineChart, Sparkles } from "lucide-react";

export default function Step6CompoundingIntelligence() {
  const milestones = [
    { day: "Day 0", label: "Baseline", icon: LineChart, color: "text-gray-400" },
    { day: "Day 30", label: "Patterns", icon: Zap, color: "text-cyan-400" },
    { day: "Day 90", label: "Precision", icon: ShieldCheck, color: "text-[#FF4A00]" },
    { day: "Day 180+", label: "Prediction", icon: Sparkles, color: "text-purple-400" },
  ];

  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            Step 6 · Compounding Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The longer you stay, <br/>
            <span className="text-[#FF4A00]">the smarter it gets.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Most health apps give you a snapshot. Pryima gives you a trajectory. Over months, your AI health twin becomes predictive — not just reactive.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-800 via-cyan-500/50 to-purple-500/50 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl bg-[#0A0F1E] border border-white/10 flex items-center justify-center mb-4 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF4A00]/50 group-hover:shadow-[0_0_30px_rgba(255,74,0,0.2)]`}>
                  <m.icon className={`w-8 h-8 ${m.color}`} />
                </div>
                <div className="text-xs font-mono text-gray-500 mb-1">{m.day}</div>
                <div className="text-white font-bold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Anticipating glucose responses before they happen",
            "Detecting early signs of burnout or overtraining",
            "Suggesting the best times of day for your hardest work",
            "Warning you when your gut or skin microbiome may need support",
            "Adjusting for seasonal, hormonal, or lifestyle shifts"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl font-light text-white">
            This is what it feels like when your health finally has <span className="text-cyan-400 font-normal">its own AI lab.</span>
          </p>
        </div>
      </div>
    </section>
  );
}