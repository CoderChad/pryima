import React from "react";
import { Target, Utensils, Moon, Dumbbell, Pill } from "lucide-react";

export default function Step5PrecisionInsights() {
  const insights = [
    {
      icon: Pill,
      text: "You recover 28% faster when you increase Omega-3 intake by 1g.",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: Utensils,
      text: "Avoid high-histamine foods after 5PM — your glucose stays elevated into the night.",
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    },
    {
      icon: Dumbbell,
      text: "Your deep sleep improves on days when you lift weights before 6PM.",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: Moon,
      text: "Taking magnesium 90 minutes before bed leads to more consistent REM sleep.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10"
    }
  ];

  return (
    <section className="py-24 bg-[#02040A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Step 5 · Precision Recommendations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From generic advice to <br/>
              <span className="text-[#FF4A00]">hyper-personal coaching.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              After about 30 days, Pryima shifts into high-precision mode. It begins delivering actionable, specific recommendations that are built entirely from your data.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Every insight is the output of your genetics, labs, microbiome, wearables, and daily choices working together — decoded by your personal AI.
            </p>
          </div>

          {/* Image Content - Cards */}
          <div className="order-1 lg:order-2 space-y-4">
            {insights.map((insight, i) => (
              <div 
                key={i} 
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300 flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-lg ${insight.bg} flex items-center justify-center flex-shrink-0`}>
                  <insight.icon className={`w-5 h-5 ${insight.color}`} />
                </div>
                <div>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    "{insight.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}