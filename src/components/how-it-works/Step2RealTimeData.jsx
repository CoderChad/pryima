import React from "react";
import { motion } from "framer-motion";
import { Watch, Smartphone, Activity } from "lucide-react";

export default function Step2RealTimeData() {
  return (
    <section className="py-24 bg-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Content - Left on Desktop */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Wearable Data Stream" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
              
              {/* Data Stream Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                {[
                  { icon: Watch, label: "Sleep Quality", val: "84%", color: "text-cyan-400" },
                  { icon: Activity, label: "HRV", val: "52ms", color: "text-[#FF4A00]" },
                  { icon: Smartphone, label: "Steps", val: "8,432", color: "text-green-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 text-gray-300">
                      <item.icon size={16} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <div className={`font-mono font-bold ${item.color}`}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content - Right on Desktop */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Step 2 · Real-Time Life Data
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We layer in <br/>
              <span className="text-[#FF4A00]">your daily reality.</span>
            </h2>
            
            <div className="prose prose-invert max-w-none mb-8 text-gray-400 text-lg leading-relaxed">
              <p className="mb-4">
                Your body is not static — and neither is Pryima. Once your baseline is set, the system continuously ingests dynamic signals from your everyday life:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Apple Health and Terra-connected wearables",
                  "Workouts, movement, and activity",
                  "Sleep cycles and recovery patterns",
                  "Heart rate and stress indicators",
                  "Meal timing and check-ins",
                  "Glucose curves from your CGM (if included)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                These streams show how your biology behaves in the real world — not just in a lab report.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-gray-300 text-sm font-medium">
                Now, Pryima can start connecting the dots between what you do and how your body responds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}