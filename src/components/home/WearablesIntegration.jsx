import React from "react";
import { motion } from "framer-motion";
import { Watch, Activity, Zap, Smartphone } from "lucide-react";

export default function WearablesIntegration() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#050814]/80 to-transparent z-10" />
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/17ec3cffd_IMG_0164.jpg" 
          alt="Wearables Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4A00]/10 border border-[#FF4A00]/20 text-[#FF4A00] text-sm font-medium">
              <Activity size={14} />
              <span>Real-Time Sync</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white">
              Your Wearables, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A00] to-[#FF6B00]">
                Supercharged by AI
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Pryima doesn't just display your Oura or Apple Watch data. It layers it with your clinical labs and genetics to give you context. 
              <br/><br/>
              See how your deep sleep correlates with your magnesium levels, or how your HRV responds to your specific nutritional protocol.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Oura Ring", icon: "https://img.icons8.com/ios/50/ffffff/ring-side.png" },
                { name: "Apple Watch", icon: "https://img.icons8.com/ios/50/ffffff/apple-watch-apps.png" },
                { name: "Whoop", icon: "https://img.icons8.com/ios/50/ffffff/activity-feed.png" },
                { name: "Dexcom", icon: "https://img.icons8.com/ios/50/ffffff/diabetes.png" }
              ].map((device, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 flex items-center justify-center opacity-80">
                    {/* Placeholder icons */}
                    <Watch className="text-gray-300" />
                  </div>
                  <span className="text-white font-medium">{device.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4A00]/20 to-transparent blur-3xl rounded-full opacity-30" />
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-2xl"
            >
              {/* Mockup Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Watch className="text-[#FF4A00]" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Live Sync Active</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Receiving Data
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono text-white">09:41</div>
                </div>
              </div>

              {/* Real-time Chart Mockup */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">Heart Rate Variability (HRV)</span>
                    <span className="text-white font-bold">42 ms</span>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[35, 38, 40, 42, 39, 41, 45, 42, 44, 48, 42].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#FF4A00] opacity-60 hover:opacity-100 transition-opacity rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex justify-between">
                    <span>12 AM</span>
                    <span>6 AM</span>
                    <span>12 PM</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-xs mb-1">Mitochondrial Efficiency</div>
                    <div className="text-xl font-bold text-green-400">92%</div>
                    <div className="text-xs text-gray-500 mt-1">Correlated w/ Deep Sleep</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-xs mb-1">Recovery Score</div>
                    <div className="text-xl font-bold text-amber-400">High</div>
                    <div className="text-xs text-gray-500 mt-1">Ready for Strain</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Connection Lines */}
            <div className="absolute -right-4 top-20 space-y-4 hidden lg:block">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md transform translate-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-xs text-white">Oura Synced</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md transform translate-x-8">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs text-white">Watch Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}