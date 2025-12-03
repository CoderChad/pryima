import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Moon, Zap, Coffee } from "lucide-react";

export default function Step3PatternRecognition() {
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
              <span>Step 3 · Pattern Recognition</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your AI begins to see your unique patterns.
            </h2>
            
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                After a few weeks, Pryima starts recognizing your personal rhythms:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Which foods consistently spike your glucose",
                  "What days and times you sleep best",
                  "Which workouts drain you vs. energize you",
                  "What supplements actually move the needle",
                  "How stress, environment, and habits shape your recovery"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A00] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p>
                Instead of guessing, Pryima maps your inputs (choices, behaviors, environment) to your outputs (energy, recovery, glucose, sleep, and more).
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-[#FF4A00]/5 border border-[#FF4A00]/20 rounded-lg inline-block">
              <span className="text-[#FF4A00] font-medium text-sm">This is where Pryima graduates from data collection to true understanding.</span>
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
            <div className="relative bg-[#0A0C14] border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Simulated Pattern Graph */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                        <h3 className="text-white font-semibold">Weekly Correlations</h3>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FF4A00]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#00F0FF]"></span>
                        </div>
                    </div>

                    {[
                        { label: "Late Meal vs Deep Sleep", val: "-24%", color: "text-red-400", icon: Moon },
                        { label: "Morning Sun vs Energy", val: "+18%", color: "text-green-400", icon: Zap },
                        { label: "Protein vs Glucose Stability", val: "+40%", color: "text-green-400", icon: TrendingUp },
                        { label: "Caffeine > 2PM vs Recovery", val: "-15%", color: "text-red-400", icon: Coffee }
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-md bg-black/50 border border-white/10">
                                    <stat.icon className="w-4 h-4 text-gray-400" />
                                </div>
                                <span className="text-gray-300 text-sm">{stat.label}</span>
                            </div>
                            <span className={`font-mono font-bold ${stat.color}`}>{stat.val}</span>
                        </div>
                    ))}
                    
                    {/* Fake Graph Lines */}
                    <div className="h-32 mt-6 relative border-l border-b border-white/10">
                         <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                            <path d="M0,80 C50,80 100,20 150,20 C200,20 250,60 300,60" stroke="#00F0FF" strokeWidth="2" fill="none" className="drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
                            <path d="M0,60 C50,70 100,40 150,40 C200,40 250,90 300,85" stroke="#FF4A00" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                         </svg>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/10"></div>
                         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-[#02040A] px-2 py-1 border border-[#00F0FF]/50 rounded text-[10px] text-[#00F0FF]">Pattern Detected</div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}