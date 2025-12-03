import React from "react";
import { ArrowRight, Dumbbell, Moon, Pill, Ban } from "lucide-react";

export default function Step5PrecisionInsights() {
  const insights = [
    {
      icon: Pill,
      text: "You recover 28% faster when you increase Omega-3 intake by 1g.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: Ban,
      text: "Avoid high-histamine foods after 5PM — your glucose stays elevated into the night.",
      color: "text-red-400",
      bg: "bg-red-400/10"
    },
    {
      icon: Dumbbell,
      text: "Your deep sleep improves on days when you lift weights before 6PM.",
      color: "text-[#FF4A00]",
      bg: "bg-[#FF4A00]/10"
    },
    {
      icon: Moon,
      text: "Taking magnesium 90 minutes before bed leads to more consistent REM sleep.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ];

  return (
    <section className="py-24 bg-[#02040A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF4A00]"></span>
              Step 5 · Precision Recommendations
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              From generic advice to <br />
              <span className="text-[#FF4A00]">hyper-personal coaching.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              After about 30 days, Pryima shifts into high-precision mode. It begins delivering actionable, specific recommendations that are built entirely from your data:
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Every insight is the output of your genetics, labs, microbiome, wearables, and daily choices working together — decoded by your personal AI.
            </p>
          </div>

          {/* Cards Right */}
          <div className="space-y-4">
             {insights.map((card, i) => (
               <div 
                 key={i}
                 className="p-5 rounded-xl bg-[#0A0F1E] border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-2 group"
               >
                 <div className="flex gap-4">
                   <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0 ${card.color}`}>
                     <card.icon className="w-5 h-5" />
                   </div>
                   <div className="flex-1">
                     <p className="text-gray-200 font-medium leading-snug group-hover:text-white transition-colors">
                       {card.text}
                     </p>
                   </div>
                   <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#FF4A00] transition-colors opacity-0 group-hover:opacity-100" />
                 </div>
               </div>
             ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}