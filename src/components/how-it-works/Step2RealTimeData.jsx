import React from "react";
import { Watch, Activity, Smartphone, Zap } from "lucide-react";

export default function Step2RealTimeData() {
  return (
    <section className="py-24 bg-[#050814] relative border-t border-white/5 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Left */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5 bg-black/40 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2670&auto=format&fit=crop"
                alt="Wearable Data Integration"
                className="w-full h-auto object-cover opacity-80"
              />
              
              {/* Data Stream Overlay Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-50" />
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                 <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                    <span>SYNCING WEARABLES</span>
                    <span className="animate-pulse">LIVE</span>
                 </div>
                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 w-2/3 animate-[shimmer_2s_infinite]" />
                 </div>
                 <div className="flex justify-between text-white text-sm">
                    <div className="flex items-center gap-2"><Watch className="w-4 h-4" /> 98 HRV</div>
                    <div className="flex items-center gap-2"><Activity className="w-4 h-4" /> 112 BPM</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Step 2 · Real-Time Life Data
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              We layer in your <br />
              <span className="text-cyan-400">daily reality.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Your body is not static — and neither is Pryima. Once your baseline is set, the system continuously ingests dynamic signals from your everyday life:
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Apple Health and Terra-connected wearables",
                "Workouts, movement, and activity",
                "Sleep cycles and recovery patterns",
                "Heart rate and stress indicators",
                "Meal timing and check-ins",
                "Glucose curves from your CGM"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              These streams show how your biology behaves in the real world — not just in a lab report.
            </p>
            
            <p className="text-cyan-400 font-medium">
              Now, Pryima can start connecting the dots between what you do and how your body responds.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}