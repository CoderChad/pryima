import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Utensils, Moon, Dumbbell, Pill } from "lucide-react";

export default function Step5PrecisionInsights() {
    const insights = [
        { icon: Utensils, text: "You recover 28% faster when you increase Omega-3 intake by 1g." },
        { icon: Utensils, text: "Avoid high-histamine foods after 5PM — your glucose stays elevated into the night." },
        { icon: Dumbbell, text: "Your deep sleep improves on days when you lift weights before 6PM." },
        { icon: Pill, text: "Taking magnesium 90 minutes before bed leads to more consistent REM sleep." },
    ];

  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-sm font-medium mb-6">
              <span>Step 5 · Precision Recommendations</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From generic advice to hyper-personal coaching.
            </h2>
            
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                After about 30 days, Pryima shifts into high-precision mode. It begins delivering actionable, specific recommendations that are built entirely from your data.
              </p>
              
              <p>
                Every insight is the output of your genetics, labs, microbiome, wearables, and daily choices working together — decoded by your personal AI.
              </p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent rounded-3xl blur-2xl" />
             <div className="space-y-4">
                {insights.map((insight, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#0A0F1E] border border-white/10 p-4 rounded-xl flex items-start gap-4 hover:border-[#00F0FF]/30 transition-colors group"
                    >
                        <div className="p-2 bg-[#00F0FF]/10 rounded-lg text-[#00F0FF] group-hover:text-white group-hover:bg-[#00F0FF] transition-colors">
                            <insight.icon className="w-5 h-5" />
                        </div>
                        <div>
                             <p className="text-gray-300 text-sm leading-relaxed">
                                {insight.text}
                             </p>
                        </div>
                    </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}