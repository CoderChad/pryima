import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Watch, Activity, Heart, Moon, Utensils } from "lucide-react";

export default function Step2RealTimeData() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
        {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
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
            <div className="absolute inset-0 bg-gradient-to-bl from-[#00F0FF]/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm aspect-square md:aspect-[4/3] flex items-center justify-center">
               {/* Data Stream Simulation */}
               <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border border-[#00F0FF]/20 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-full border border-[#FF4A00]/20 animate-spin-reverse-slow"></div>
                  
                  {/* Central Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                        <Activity className="w-10 h-10 text-[#00F0FF]" />
                    </div>
                  </div>

                  {/* Satellites */}
                  {[
                    { icon: Watch, color: "text-[#FF4A00]", top: "0", left: "50%" },
                    { icon: Smartphone, color: "text-[#00F0FF]", bottom: "0", left: "50%" },
                    { icon: Heart, color: "text-purple-500", top: "50%", left: "0" },
                    { icon: Moon, color: "text-indigo-500", top: "50%", right: "0" },
                  ].map((item, i) => (
                      <div key={i} className={`absolute w-12 h-12 rounded-full bg-[#0A0F1E] border border-white/10 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg`} style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                  ))}
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
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p>
                These streams show how your biology behaves in the real world — not just in a lab report.
              </p>
              
               <p className="text-[#00F0FF] italic font-medium">
                Now, Pryima can start connecting the dots between what you do and how your body responds.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}