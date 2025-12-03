import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, BrainCircuit, Database, Lock } from "lucide-react";

export default function Step4ContinuousRetraining() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Content (Left on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border border-[#00F0FF]/20 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-8 rounded-full border border-[#FF4A00]/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-16 rounded-full border border-white/10"></div>
                
                {/* Core Brain */}
                <div className="relative z-10 w-32 h-32 bg-black border border-[#00F0FF]/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                    <BrainCircuit className="w-16 h-16 text-[#00F0FF]" />
                </div>
                
                {/* Data Nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#02040A] px-3 py-1 rounded-full border border-white/20 text-xs text-white flex items-center gap-2">
                    <RefreshCw className="w-3 h-3 text-[#00F0FF] animate-spin" /> Retraining
                </div>
            </div>
          </motion.div>

          {/* Text Content (Right on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-sm font-medium mb-6">
              <span>Step 4 · Continuous Retraining</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The AI behind Pryima literally becomes more you.
            </h2>
            
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                Each user gets their own evolving AI model. It isn’t a generic engine — it’s trained and retrained on your data only.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="w-5 h-5 text-[#00F0FF]" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">Weekly Updates</h4>
                        <p className="text-sm text-gray-400">New data automatically refines your model weights.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Database className="w-5 h-5 text-[#FF4A00]" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">Unique Model</h4>
                        <p className="text-sm text-gray-400">No two models are identical; yours fits only you.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-[#00F0FF]" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">Zero-Knowledge Training</h4>
                        <p className="text-sm text-gray-400">Your data is never used to train other users’ models.</p>
                    </div>
                </li>
              </ul>
              
              <p>
                Over time, this creates a living ‘digital twin’ of your health — an AI whose only job is to understand you better.
              </p>
              
              <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-medium italic">Most apps stay the same. Pryima upgrades itself around you.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}