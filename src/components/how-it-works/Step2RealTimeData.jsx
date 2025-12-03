import React from "react";
import { motion } from "framer-motion";
import { Watch, Smartphone, Heart, Zap } from "lucide-react";

export default function Step2RealTimeData() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
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
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl p-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl -z-10" />
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Central Hub */}
                <div className="w-24 h-24 rounded-full bg-black border-2 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.3)] flex items-center justify-center mb-12 z-20 relative">
                    <div className="absolute inset-0 rounded-full border border-[#00F0FF] animate-ping opacity-20"></div>
                    <div className="text-white font-bold text-xl tracking-tighter">PRYIMA</div>
                </div>
                
                {/* Connecting Lines (simplified visuals) */}
                <div className="absolute top-12 w-full h-full flex justify-center">
                    <div className="w-px h-32 bg-gradient-to-b from-[#00F0FF] to-transparent opacity-50"></div>
                </div>

                {/* Device Grid */}
                <div className="grid grid-cols-2 gap-6 w-full">
                    {[
                        { name: "Apple Health", icon: Smartphone, val: "Syncing..." },
                        { name: "Oura / Whoop", icon: Watch, val: "98% Recovery" },
                        { name: "Live HR", icon: Heart, val: "64 BPM" },
                        { name: "Activity", icon: Zap, val: "450 Active Cal" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                                <item.icon className="text-[#00F0FF] w-5 h-5" />
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                            <div className="text-gray-400 text-xs mb-1">{item.name}</div>
                            <div className="text-white font-mono text-sm">{item.val}</div>
                        </div>
                    ))}
                </div>
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
              <span>Step 2 · Real-Time Life Data</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We layer in your daily reality.
            </h2>
            
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                Your body is not static — and neither is Pryima. Once your baseline is set, the system continuously ingests dynamic signals from your everyday life:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Apple Health and Terra-connected wearables",
                  "Workouts, movement, and activity",
                  "Sleep cycles and recovery patterns",
                  "Heart rate and stress indicators",
                  "Meal timing and check-ins",
                  "Glucose curves from your CGM (if included)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p>
                These streams show how your biology behaves in the real world — not just in a lab report.
              </p>

              <p className="text-[#00F0FF] italic font-medium pt-2">
                Now, Pryima can start connecting the dots between what you do and how your body responds.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}