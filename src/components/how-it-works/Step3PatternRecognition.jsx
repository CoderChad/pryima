import React from "react";
import { TrendingUp, Calendar, Battery, Moon } from "lucide-react";

export default function Step3PatternRecognition() {
  return (
    <section className="py-24 bg-[#02040A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF4A00]"></span>
              Step 3 · Pattern Recognition
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Your AI begins to see <br />
              <span className="text-[#FF4A00]">your unique patterns.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              After a few weeks, Pryima starts recognizing your personal rhythms:
            </p>
            
            <ul className="space-y-4">
              {[
                "Which foods consistently spike your glucose",
                "What days and times you sleep best",
                "Which workouts drain you vs. energize you",
                "What supplements actually move the needle",
                "How stress, environment, and habits shape your recovery"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                   <div className="mt-1 text-[#FF4A00]">•</div>
                   <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Instead of guessing, Pryima maps your inputs (choices, behaviors, environment) to your outputs (energy, recovery, glucose, sleep, and more).
            </p>
            
            <div className="inline-block px-4 py-2 rounded-lg bg-[#FF4A00]/10 border border-[#FF4A00]/20 text-[#FF4A00] text-sm font-semibold">
              This is where Pryima graduates from data collection to true understanding.
            </div>
          </div>

          {/* Image Right */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0F1E] p-6 shadow-2xl">
               {/* Mock Dashboard */}
               <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                     <h3 className="text-white font-medium">Correlations Detected</h3>
                     <span className="text-xs text-gray-500">Last 30 Days</span>
                  </div>
                  
                  {/* Graph Mockup 1 */}
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs text-gray-400">
                        <span>Late Meals (>8pm)</span>
                        <span className="text-red-400">-14% Deep Sleep</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/50 w-[85%]" />
                     </div>
                  </div>
                  
                  {/* Graph Mockup 2 */}
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs text-gray-400">
                        <span>Magnesium Intake</span>
                        <span className="text-green-400">+12% HRV</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500/50 w-[65%]" />
                     </div>
                  </div>
                  
                  {/* Chart Visual */}
                  <div className="mt-6 h-40 flex items-end justify-between gap-1 px-2">
                     {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                        <div key={i} className="w-full bg-gradient-to-t from-[#FF4A00]/20 to-[#FF4A00] rounded-t-sm hover:opacity-100 opacity-70 transition-opacity" style={{ height: `${h}%` }} />
                     ))}
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-[#FF4A00] px-6 py-3 rounded-xl shadow-xl">
                     <div className="text-[#FF4A00] text-xs font-bold uppercase tracking-widest mb-1">Insight Found</div>
                     <div className="text-white text-sm">High Cortisol correlates with low recovery on Mondays.</div>
                  </div>
               </div>
            </div>
            
            {/* Glow */}
            <div className="absolute -inset-10 bg-[#FF4A00]/5 rounded-full blur-3xl -z-10" />
          </div>
          
        </div>
      </div>
    </section>
  );
}