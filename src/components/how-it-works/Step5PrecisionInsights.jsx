import React from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Dumbbell, Moon, Pill } from "lucide-react";

export default function Step5PrecisionInsights() {
  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4A00]/10 border border-[#FF4A00]/20 text-[#FF4A00] text-sm font-medium mb-6">
              <span>Step 5 · Precision Recommendations</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From generic advice to hyper-personal coaching.
            </h2>
            
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                After about 30 days, Pryima shifts into high-precision mode. It begins delivering actionable, specific recommendations that are built entirely from your data:
              </p>
              
              <div className="space-y-4 pl-4 border-l-2 border-[#FF4A00]/30">
                  <p className="italic text-gray-300">"You recover 28% faster when you increase Omega-3 intake by 1g."</p>
                  <p className="italic text-gray-300">"Avoid high-histamine foods after 5PM — your glucose stays elevated into the night."</p>
                  <p className="italic text-gray-300">"Your deep sleep improves on days when you lift weights before 6PM."</p>
                  <p className="italic text-gray-300">"Taking magnesium 90 minutes before bed leads to more consistent REM sleep."</p>
              </div>
              
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
             <div className="space-y-4">
                 {[
                     { icon: Pill, title: "Optimization Found", text: "Increase Omega-3 by 1g to boost recovery by ~28%.", color: "text-[#00F0FF]" },
                     { icon: Moon, title: "Sleep Insight", text: "Magnesium 90m before bed = +15m REM sleep.", color: "text-[#FF4A00]" },
                     { icon: Dumbbell, title: "Training Impact", text: "Heavy lifting before 6PM correlates with higher HRV.", color: "text-green-400" }
                 ].map((card, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="bg-[#11141D] border border-white/10 rounded-xl p-5 shadow-lg flex gap-4 items-start relative overflow-hidden"
                     >
                         <div className={`absolute top-0 left-0 w-1 h-full ${card.color.replace('text-', 'bg-')}`}></div>
                         <div className="p-2 rounded-lg bg-white/5">
                             <card.icon className={`w-6 h-6 ${card.color}`} />
                         </div>
                         <div>
                             <h4 className={`font-bold text-sm mb-1 ${card.color}`}>{card.title}</h4>
                             <p className="text-gray-300 text-sm">{card.text}</p>
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