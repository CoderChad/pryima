import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Battery, Moon, Coffee } from "lucide-react";

export default function Step3PatternRecognition() {
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
             <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-[#00F0FF]">
              <p className="text-gray-300 text-sm">
                <strong className="text-white block mb-1">True Understanding</strong>
                This is where Pryima graduates from data collection to true understanding.
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
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0F1E] p-6">
               {/* Pattern Graph Mockup */}
               <div className="space-y-6">
                   <div className="flex justify-between items-center border-b border-white/10 pb-4">
                       <h3 className="text-white font-mono text-sm">CORRELATION DETECTED</h3>
                       <span className="text-[#FF4A00] text-xs font-bold px-2 py-1 bg-[#FF4A00]/10 rounded">HIGH CONFIDENCE</span>
                   </div>
                   
                   {/* Mock Charts */}
                   <div className="space-y-2">
                       <div className="flex justify-between text-xs text-gray-500">
                           <span>GLUCOSE</span>
                           <span>SPIKE DETECTED</span>
                       </div>
                       <div className="h-16 w-full bg-black/50 rounded-lg relative overflow-hidden">
                           <svg className="w-full h-full text-[#FF4A00]" viewBox="0 0 100 40" preserveAspectRatio="none">
                               <path d="M0,35 Q20,35 30,20 T60,10 T90,30 T100,35" fill="none" stroke="currentColor" strokeWidth="2" />
                           </svg>
                       </div>
                   </div>
                   
                    <div className="space-y-2">
                       <div className="flex justify-between text-xs text-gray-500">
                           <span>SLEEP QUALITY</span>
                           <span>IMPACTED</span>
                       </div>
                       <div className="h-16 w-full bg-black/50 rounded-lg relative overflow-hidden">
                           <svg className="w-full h-full text-gray-500" viewBox="0 0 100 40" preserveAspectRatio="none">
                               <path d="M0,10 Q20,10 40,15 T70,30 T100,35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                           </svg>
                       </div>
                   </div>
                   
                   <div className="p-4 bg-[#00F0FF]/5 rounded-lg border border-[#00F0FF]/20">
                       <p className="text-xs text-[#00F0FF] font-mono">INSIGHT: Late meals > 8PM are correlating with -15% Deep Sleep.</p>
                   </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}