import React from "react";
import { motion } from "framer-motion";
import { Brain, RefreshCw, Database } from "lucide-react";

export default function Step4ContinuousRetraining() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#FF4A00]/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm aspect-square flex items-center justify-center p-8">
               <div className="relative w-full h-full flex items-center justify-center">
                   {/* Outer Ring */}
                   <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin-slow"></div>
                   
                   {/* Training Nodes */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00F0FF] rounded-full shadow-[0_0_10px_#00F0FF]"></div>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FF4A00] rounded-full shadow-[0_0_10px_#FF4A00]"></div>
                   
                   {/* Central Brain */}
                   <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-[#0A0F1E] to-black rounded-full border border-white/20 flex items-center justify-center shadow-2xl">
                       <Brain className="w-16 h-16 text-white" />
                       <div className="absolute inset-0 bg-[#00F0FF]/5 rounded-full animate-pulse"></div>
                   </div>
                   
                    {/* Orbiting Data */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-10 border border-[#00F0FF]/20 rounded-full"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00F0FF] rounded-full"></div>
                    </motion.div>
               </div>
            </div>
          </motion.div>

          {/* Text Content (Right) */}
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
              
              <ul className="space-y-3">
                {[
                  "Weekly updates as new data comes in",
                  "Model weights subtly adjusted for better accuracy",
                  "No two models are identical",
                  "Your data is never used to train other users’ models (zero-knowledge style)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A00] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p>
                Over time, this creates a living ‘digital twin’ of your health — an AI whose only job is to understand you better.
              </p>
              
              <p className="text-[#FF4A00] font-medium border-l-4 border-[#FF4A00] pl-4">
                Most apps stay the same. Pryima upgrades itself around you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}