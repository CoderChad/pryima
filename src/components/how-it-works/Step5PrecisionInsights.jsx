import React from "react";
import { Target, Utensils, Moon, Dumbbell, Pill, Sparkles } from "lucide-react";

export default function Step5PrecisionInsights() {
  const insights = [
    {
      icon: Pill,
      text: "You recover 28% faster when you increase Omega-3 intake by 1g.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      metric: "+28% Recovery"
    },
    {
      icon: Utensils,
      text: "Avoid high-histamine foods after 5PM — your glucose stays elevated into the night.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      metric: "Glucose Control"
    },
    {
      icon: Dumbbell,
      text: "Your deep sleep improves on days when you lift weights before 6PM.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      metric: "Deep Sleep ^"
    },
    {
      icon: Moon,
      text: "Taking magnesium 90 minutes before bed leads to more consistent REM sleep.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      metric: "REM Stability"
    }
  ];

  return (
    <section className="py-24 bg-[#02040A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - First on Mobile, Left on Desktop */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Step 5 · Precision Recommendations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From generic advice to <br/>
              <span className="text-[#FF4A00]">hyper-personal coaching.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              After about 30 days, Pryima shifts into high-precision mode. It begins delivering actionable, specific recommendations that are built entirely from your data:
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every insight is the output of your genetics, labs, microbiome, wearables, and daily choices working together — decoded by your personal AI.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles size={16} className="text-[#FF4A00]" />
              <span>AI Confidence Score: 94%</span>
            </div>
          </div>

          {/* Image Content - Recommendation Cards */}
          <div className="space-y-4">
            {insights.map((insight, i) => (
              <div 
                key={i} 
                className="p-5 rounded-xl bg-[#0A0F1E] border border-white/10 hover:border-[#FF4A00]/30 transition-all hover:-translate-y-1 duration-300 flex items-start gap-4 shadow-lg group"
              >
                <div className={`w-12 h-12 rounded-xl ${insight.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <insight.icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base font-medium">
                      "{insight.text}"
                    </p>
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5 mt-2">
                    {insight.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}